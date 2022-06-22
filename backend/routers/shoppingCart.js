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
  let [data] = await pool.execute(`SELECT shoppingcart.*, groups.* FROM shoppingcart JOIN groups ON shoppingcart.group_id=groups.id WHERE shoppingcart.user_id=${userID}`);
  res.json({ result: data });
});
module.exports = router;
