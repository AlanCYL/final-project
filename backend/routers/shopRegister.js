const express = require('express');
const router = express.Router();

//db連線模組
const pool = require('../utils/db');

//圖片用
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  // 設定儲存的目的地 （檔案夾）
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, '..', 'assets', 'shopImg'));
  },
  filename: function (req, file, cb) {
    let newFilename = file.originalname;
    cb(null, newFilename);
  },
});
const uploader = multer({
  // 設定儲存的位置
  storage: storage,
  // 過濾圖片
  // 可以想成是 photo 這個欄位的「資料驗證」
  fileFilter: function (req, file, cb) {
    if (file.mimetype !== 'image/jpeg' && file.mimetype !== 'image/jpg' && file.mimetype !== 'image/png') {
      cb('這些是不被接受的格式', false);
    } else {
      // cb(錯誤, 結果)
      cb(null, true);
    }
  },
  // 檔案尺寸的過濾
  // 一般不會上傳太大的圖片尺寸，以免到時候前端開啟得很慢
  limits: {
    // 1k = 1024
    fileSize: 200 * 1024,
  },
});
router.post('/register', uploader.single('img'), async (request, respond, next) => {
  console.log('上傳圖片', request.file);

  //存入資料庫
  let img = request.file ? request.file.filename : '';
  let [result] = await pool.execute('INSERT INTO shop (name,phone,account,password,description,img) VALUES (?, ?, ?, ?, ?,?)', [
    request.body.name,
    request.body.phone,
    request.body.account,
    request.body.password,
    request.body.description,
    img,
  ]);
  console.log('存入的資料:', result);
  respond.json({ result: 'ok' });
});
module.exports = router;
