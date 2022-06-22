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

// /api/member/login
router.post('/login', async (req, res, next) => {
  //TODO: 確認有沒有這個帳號
  let [members] = await pool.execute('SELECT * FROM user WHERE identity_card = ?', [req.body.identity_card]);
  if (members.length === 0) {
    // 如果沒有這個帳號，就回覆錯誤
    return res.status(400).json({ code: 3003, error: '這個身分證字號沒有註冊過' });
  }
  //如果程式碼能執行到這，表示MEMBER至少有一個資料
  //把這個會員資料拿出來
  let member = members[0];

  //TODO: 如果有，確認密碼
  if (req.body.password !== member.password) {
    return res.status(400).json({ code: 3004, error: '身分證字號或密碼錯誤' });
  }

  //TODO: 密碼符合，就開始寫 session
  let returnMember = {
    identity_card: member.identity_card,
    password: member.password,
    photo: member.photo,
  };
  req.session.member = returnMember;
  //回覆資料給前端
  res.json({ code: 0, member: returnMember });
});
module.exports = router;
