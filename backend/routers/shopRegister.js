const express = require('express');
const router = express.Router();

//db連線模組
const pool = require('../utils/db');

//圖片用
const multer = require('multer');
const path = require('path');
//圖片儲存位置
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
//圖片重新命名
const uploader = multer({
  // 設定儲存的位置
  storage: storage,
  // 過濾圖片
  fileFilter: function (req, file, cb) {
    if (file.mimetype !== 'image/jpeg' && file.mimetype !== 'image/jpg' && file.mimetype !== 'image/png') {
      cb('這些是不被接受的格式', false);
    } else {
      // cb(錯誤, 結果)
      cb(null, true);
    }
  },
  // 檔案尺寸的過濾
  limits: {
    // 1k = 1024
    fileSize: 200 * 1024,
  },
});

//註冊
router.post('/register', uploader.single('img'), async (request, respond, next) => {
  console.log(request.body);
  // console.log('上傳圖片', request.file);

  //確認 email 有沒有註冊過
  let [shopMember] = await pool.execute('SELECT id, account FROM shop WHERE account = ?', [request.body.account]);
  if (shopMember.length !== 0) {
    // 這個 email 有註冊過
    return respond.status(400).json({ code: 3002, error: '這個帳號已經註冊過' });
  }

  //存入資料庫
  let img = request.file ? '/shopImg/' + request.file.filename : '';
  let [result] = await pool.execute('INSERT INTO shop (name,phone,account,password,description,address,img) VALUES (?, ?, ?, ?, ?,?,?)', [
    request.body.name,
    request.body.phone,
    request.body.account,
    request.body.password,
    request.body.description,
    request.body.address,
    img,
  ]);

  //抓shop最後一筆資料
  const [newShop] = await pool.execute('select id from shop order by id desc limit 1');

  console.log('最後一筆id:', newShop); //[ { id: 15 } ]
  console.log(newShop[0].id);

  for (let i = 0; i < request.body.type_id.length; i++) {
    let [cate] = await pool.execute('INSERT INTO shop_and_type (shop_id,type_id) VALUES (?,?)', [newShop[0].id, request.body.type_id[i]]);
    // console.log('存入的資料:', cate);
  }

  // console.log('存入的資料:', result);

  respond.json({ result: 'ok' });
});

//登入
router.post('/login', async (request, respond, next) => {
  //確認資料有收到
  console.log('確認有拿到資料', request.body);

  //確認有無帳號
  //確認 email 有沒有註冊過
  let [shopMember] = await pool.execute('SELECT id, account,password FROM shop WHERE account = ?', [request.body.account]);
  if (shopMember.length === 0) {
    // 這個 email 沒有註冊過 就回復錯誤
    return respond.status(400).json({ code: 3003, error: '查無此帳號' });
  }
  // 如果程式碼能執行到這裡，表示 members 裡至少有一個資料
  // 把這個會員資料拿出來
  console.log('有符合的資料', shopMember[0]); //有符合的資料 { id: 15, account: 'dintaifung@test.com', password: '151515' }
  let nowShopMember = shopMember[0].password; //使用者輸入的密碼
  let dataShopMember = request.body.password; //資料庫的密碼

  //TODO:如果有 確認密碼
  if (nowShopMember !== dataShopMember) {
    // 如果密碼不符合，回覆登入錯誤
    return respond.status(401).json({ code: 3004, error: '帳號或密碼錯誤' });
  }
  //TODO:密碼符合 寫入session
  //TODO:回復資料給前端

  respond.json({ result: 'ok' });
});
module.exports = router;
