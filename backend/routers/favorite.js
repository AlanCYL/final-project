const express = require('express');
const router = express.Router();

//db連線模組
const pool = require('../utils/db');

// // /api/favorite/list
// router.get('/list', async (req, res, next) => {
//   let [favorite] = await pool.execute('SELECT * FROM coupon');

//   return res.json({ result: 'ok' });
// });

module.exports = router;
