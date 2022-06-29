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

//finishre
router.post('/finishre', async (req, res, next) => {
  const { userID, groups } = req.body;
  let [data] = await pool.execute(
    `SELECT orders.*, groups.*, shop.name, shop.img FROM orders JOIN groups ON orders.groups_id=groups.id JOIN shop ON groups.shop_id = shop.id where groups.id in (${groups}) and user_id in (${userID})`
  );
  //console.log(data);
  res.json({ result: data });
});

//finishreservelist
router.post('/finishreservelist', async (req, res, next) => {
  const { userID, groupID } = req.body;
  // console.log(groupID);

  //先新增order資料
  for (let i = 0; i < groupID.length; i++) {
    const group = groupID[i];

    await pool.execute('INSERT INTO orders (user_id, groups_id) VALUES (?, ?)', [userID, groupID[i]]);
    //清除購物車
    await pool.execute(`DELETE FROM shoppingcart WHERE shoppingcart.user_id=${userID} AND shoppingcart.group_id=${group};`);
    //找出這個團現在有幾筆（有多少參加者）
    const [res] = await pool.execute(`SELECT * FROM orders WHERE groups_id=${group}`);
    //再更新目前人數及是否有成團
    await pool.execute(`UPDATE groups SET now_num = ${res.length} WHERE id= ${group}`);
    await pool.execute(`UPDATE groups SET established=1 WHERE now_num >= goal_num AND groups.id=${group}`);
    //establish查詢，回傳
    const update = await pool.execute(`SELECT groups.established FROM groups WHERE groups.id= ${group}`);
    const established = update[0][0].established;
    //更新再找到establish的值跟payable一樣
    await pool.execute(`UPDATE orders SET payable = ${established} WHERE groups_id= ${group} AND user_id = ${userID}`);
  }

  res.json({});
});

//payList
router.get('/paylist', async (req, res, next) => {
  const payGroup = req.query.payGroup;
  const userID = req.query.userID;
  let [data] = await pool.execute(
    `SELECT * FROM orders JOIN groups ON orders.groups_id = groups.id JOIN shop ON groups.shop_id = shop.id WHERE orders.user_id=${userID} AND orders.groups_id=${payGroup}`
  );
  res.json({ result: data });
});
//coupon
router.get('/cou', async (req, res, next) => {
  const userID = req.query.userID;
  let [data, fields] = await pool.execute(
    `SELECT user_and_coupon.*, coupon.reason, coupon.price FROM user_and_coupon JOIN coupon ON user_and_coupon.coupon_id = coupon.id WHERE user_id =${userID}`
  );
  res.json({ result: data });
});
//confirmUpdate
router.post('/updatecoupay', async (req, res, next) => {
  // console.log('呵呵呵', req.body);
  const { selectCou, payGroup, user } = req.body;
  const [pay] = await pool.execute(
    `UPDATE orders JOIN user_and_coupon ON orders.user_id = user_and_coupon.user_id SET payable=2, valid=1 WHERE orders.user_id=${user} and orders.groups_id=${payGroup} and user_and_coupon.id=${selectCou}`
  );

  res.json({ result: 'OK' });
});
//confirmSelectCoupon
router.get('/selectcou', async (req, res, next) => {
  const couID = req.query.couID;
  let [detail] = await pool.execute(`SELECT * FROM user_and_coupon JOIN coupon ON user_and_coupon.coupon_id = coupon.id WHERE user_and_coupon.id=${couID}`);
  res.json({ result: detail });
});
module.exports = router;
