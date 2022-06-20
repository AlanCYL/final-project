const express = require('express');
const router = express.Router();

//db連線模組
const pool = require('../utils/db');

router.post('/register', async (request, respond, next) => {
  console.log('註冊的資料', request.body);
  //TODO:驗證資料

  //TODO: 確認email有沒有註冊過

  //TODO:密碼雜湊
  //TODO: 存入資料庫
  let [result] = await pool.execute('INSERT INTO shop (account,name) VALUES (?, ?)', [request.body.account, request.body.name]);
  console.log('insert result:', result);
  request.json({ result: 'ok' });
});
module.exports = router;
