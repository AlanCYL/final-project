const express = require('express');
const router = express.Router();

const pool = require('../utils/db');

router.get('/search', async (req, res, next) => {
  const userID = req.query.userID;
  // 寫sql
  let [data] = await pool.execute(`Select * from shoppingcart where user_id = ${userID}`);
  res.json({ result: data });
});
module.exports = router;
