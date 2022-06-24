const express = require('express');
const router = express.Router();

//db連線模組
const pool = require('../utils/db');

//TODO: 取得 shop 的列表

router.get('/', async (request, response, next) => {
  let [data] = await pool.execute('SELECT id,name,img FROM shop');
  response.json(data);
});

//TODO: 取得單一 shop 詳細頁
router.get('/:shopID', async (request, response, next) => {
  let [data] = await pool.execute('SELECT * FROM shop WHERE id=?', [request.params.shopID]);
  response.json(data);
});

module.exports = router;
