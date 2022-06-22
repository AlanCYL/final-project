const express = require('express');
const router = express.Router();

const pool = require('../utils/db');

const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, '..', 'assets', 'shopbackstage'));
  },
  // 重新命名使用者上傳的圖片名稱
  filename: function (req, file, cb) {
    // 剛學習一個新的套件，可以把拿到的物件或變數印出來看看
    // 看看裡面有沒有放什麼有用的東西
    // console.log('multer filename', file);
    // 通常我們會選擇重新命名使用者上傳的圖片名稱
    // 以避免重複的檔名或是惡意名稱，也比較好管理
    let newFilename = file.originalname;
    cb(null, newFilename);
  },
});
const uploader = multer({
  // 設定儲存的位置
  storage: storage,
});

router.get('/search', async (req, res, next) => {
  const shopID = req.query.shopID;
  let [data, fields] = await pool.execute(`SELECT * from shop WHERE id=${shopID}`);
  res.json({ result: data });
});

//開團先找dish
// router.get('/checklist', async (req, res, next) => {
//   const shopID = req.query.shopID;
//   let [data, fields] = await pool.execute(`SELECT name from dish WHERE shop_id=${shopID}`);
//   res.json({ result: data });
// });
//開團
router.post('/opengroup', async (req, res, next) => {
  console.log('startTime', req.body);
  const group = await pool.execute('INSERT INTO groups (start_time, end_time, eating_date, eating_time, goal_num, price, shop_id) VALUES (?, ?, ?, ?, ?, ?, ?)', [
    req.body.startTime,
    req.body.endTime,
    req.body.eatingDate,
    req.body.eatingTime,
    req.body.goalNum,
    req.body.price,
    req.body.shopid,
  ]);

  const dishArr = req.body.dish;
  for (let i = 0; i < dishArr.length; i++) {
    const dish = dishArr[i];
    console.log(dish);
    await pool.execute('INSERT INTO groups_and_dish (groups_id, dish_id) VALUES (?, ?)', [group[0].insertId, dish]);
  }
  await res.json({ result: 'OK' });
});
//上架菜色
router.post('/opendish', uploader.single('photo'), async (req, res, next) => {
  console.log('dishName', req.body);
  let photo = req.file ? '/shopbackstage/' + req.file.filename : '';
  // console.log(photo);
  const { name, price, description } = req.body;
  const [dish] = await pool.execute('INSERT INTO dish (name, price, description, photo) VALUES (?, ?, ?, ?)', [name, price, description, photo]);
  // console.log(dish);
  res.json({ result: 'OK' });
});

//菜色清單
router.get('/dishlist', async (req, res, next) => {
  const shopID = req.query.shopID;
  // const dishID = req.query.dishID;
  let [data] = await pool.execute(`SELECT * FROM dish WHERE shop_id=${shopID}`);
  res.json({ result: data });
  // let [delete] = await pool.execute(`DELETE FROM dish WHERE dish.id =${dishID}`);
  // res.json({ delete: data });
});
module.exports = router;

//SELECT groups.shop_id, shop.id, shop.name from groups JOIN shop ON groups.shop_id=shop.id WHERE groups.shop_id=${shopID}
