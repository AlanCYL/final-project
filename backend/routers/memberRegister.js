const express = require('express');
const router = express.Router();

//db連線模組
const pool = require('../utils/db');

// /api/member/register
router.post('/register', async (req, res, next) => {
  console.log('註冊的資料', req.body);

  //TODO: 確認email有沒有註冊過
  let [members] = await pool.execute('SELECT identity_card, mail FROM user WHERE mail = ? OR identity_card = ?', [req.body.mail, req.body.identity_card]);
  if (members.length !== 0) {
    // 這個 email 或 身分證字號 有註冊過
    return res.status(400).json({ code: 3002, error: '這個email或身分證字號已經註冊過' });
  }

  //TODO: 存入資料庫
  let [result] = await pool.execute('INSERT INTO user (name, identity_card, password, nick_name,phone, bir, mail, create_time) VALUES (?, ?, ?, ?, ?, ?, ?, NOW())', [
    req.body.name,
    req.body.identity_card,
    req.body.password,
    req.body.nick_name,
    req.body.phone,
    req.body.bir,
    req.body.mail,
  ]);
  console.log('insert result:', result);
  res.json({ result: 'ok' });
});
module.exports = router;
