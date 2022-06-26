const express = require('express');
const router = express.Router();

const pool = require('../utils/db');
//查詢userID
router.get('/search', async (req, res, next) => {
  const userID = req.query.userID;
  let [data] = await pool.execute(`Select * from shoppingcart where user_id = ${userID}`);
  res.json({ result: data });
});

//reservelist
router.get('/reservelist', async (req, res, next) => {
  const userID = req.query.userID;
  let [data] = await pool.execute(
    `SELECT shoppingcart.*, groups.*, shop.img FROM shoppingcart JOIN groups ON shoppingcart.group_id=groups.id JOIN shop ON groups.shop_id = shop.id  WHERE shoppingcart.user_id=${userID}`
  );
  res.json({ result: data });
});

//confirmreservelist
router.post('/confirmreservelist', async (req, res, next) => {
  let [data] = await pool.execute(
    `SELECT shoppingcart.*, groups.*, shop.name, shop.img FROM shoppingcart JOIN groups ON shoppingcart.group_id=groups.id JOIN shop ON groups.shop_id = shop.id where groups.id in (${req.body.groups}) and user_id in (${req.body.userID})`
  );
  //console.log(data);
  res.json({ result: data });
});

//finishreservelist
router.post('/finishreservelist', async (req, res, next) => {
  const { userID, groupID } = req.body;
  for (let i = 0; i < groupID.length; i++) {
    const group = groupID[i];
    await pool.execute('INSERT INTO orders (user_id, groups_id) VALUES (?, ?)', [userID, group]);
  }
  res.json({});
});

//payList
router.get('/paylist', async (req, res, next) => {
  const groupID = req.query.groupID;
  const userID = req.query.userID;
  let [data] = await pool.execute(
    `SELECT * FROM orders JOIN groups ON orders.groups_id = groups.id JOIN shop ON groups.shop_id = shop.id WHERE orders.user_id=${userID} AND orders.groups_id=${groupID}`
  );
  res.json({ result: data });
});
//coupon
router.get('/coupon', async (req, res, next) => {
  const userID = req.query.userID;
  let [data, fields] = await pool.execute(
    `SELECT user_and_coupon.*, coupon.reason, coupon.price FROM user_and_coupon JOIN coupon ON user_and_coupon.coupon_id = coupon.id WHERE user_id =${userID}`
  );
  res.json({ result: data });
});
module.exports = router;
