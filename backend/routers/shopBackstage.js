const express = require('express');
const router = express.Router();

const pool = require('../utils/db');

router.post('/opengroup', async (req, res, next) => {
  console.log('startTime', req.body);
  const group = await pool.execute('INSERT INTO groups (start_time, end_time, eating_date, eating_time, goal_num, price) VALUES (?, ?, ?, ?, ?, ?)', [
    req.body.startTime,
    req.body.endTime,
    req.body.eatingDate,
    req.body.eatingTime,
    req.body.goalNum,
    req.body.price,
  ]);
  const dishArr = req.body.dish;
  for (let i = 0; i < dishArr.length; i++) {
    const dish = dishArr[i];
    // console.log(dish);
    await pool.execute('INSERT INTO groups_and_dish (groups_id, dish_id) VALUES (?, ?)', [group[0].insertId, dish]);
  }
  res.json({ result: 'OK' });
});
module.exports = router;
