const express = require('express');
const router = express.Router();

const pool = require('../utils/db');

router.get('/search', async (req, res, next) => {
  const shopID = req.query.shopID;
  let [data, fields] = await pool.execute(`SELECT * from shop WHERE id=${shopID}`);
  res.json({ result: data });
});

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
  res.json({ result: 'OK' });
});
//上架菜色
router.post('/opendish', async (req, res, next) => {
  console.log('dishName', req.body);
  const dish = await pool.execute('INSERT INTO dish (name, price, description, image) VALUES (?, ?, ?, ?)', [
    req.body.dishName,
    req.body.dishPrice,
    req.body.dishDes,
    req.body.dishImg,
  ]);
  // console.log(dish);
  res.json({ result: 'OK' });
});
module.exports = router;

//SELECT groups.shop_id, shop.id, shop.name from groups JOIN shop ON groups.shop_id=shop.id WHERE groups.shop_id=${shopID}
