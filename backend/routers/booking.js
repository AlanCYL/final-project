const express = require('express');
const router = express.Router();

//db連線模組
const pool = require('../utils/db');

// /api/booking/allBooking
router.get('/allBooking', async (req, res, next) => {
  let [booking] = await pool.execute(
    'SELECT orders.*, shop.name, shop.img, groups.eating_date, groups.end_time, groups.now_num, groups.goal_num, groups.shop_id, groups.established FROM orders LEFT JOIN groups ON orders.groups_id = groups.id LEFT JOIN shop ON groups.shop_id = shop.id WHERE orders.user_id = ? ',
    [req.query.userId]
  );

  let item = [];
  for (let i = 0; i < booking.length; i++) {
    let element = booking[i];
    element = { ...element, daysleft: element.eating_date.split('-') };
    item.push(element);
  }

  //   console.log(item);

  return res.json({ booking: item });
});

// /api/booking/okBooking
router.get('/okBooking', async (req, res, next) => {
  let [booking] = await pool.execute(
    'SELECT orders.*, shop.name, shop.img, groups.eating_date, groups.end_time, groups.now_num, groups.goal_num, groups.shop_id, groups.established FROM orders LEFT JOIN groups ON orders.groups_id = groups.id LEFT JOIN shop ON groups.shop_id = shop.id WHERE orders.user_id = ? AND groups.established = 1',
    [req.query.userId]
  );

  let item = [];
  for (let i = 0; i < booking.length; i++) {
    let element = booking[i];
    element = { ...element, daysleft: element.eating_date.split('-') };
    item.push(element);
  }

  //   console.log(item);

  return res.json({ booking: item });
});

// /api/booking/notOkBooking
router.get('/notOkBooking', async (req, res, next) => {
  let [booking] = await pool.execute(
    'SELECT orders.*, shop.name, shop.img, groups.eating_date, groups.end_time, groups.now_num, groups.goal_num, groups.shop_id, groups.established FROM orders LEFT JOIN groups ON orders.groups_id = groups.id LEFT JOIN shop ON groups.shop_id = shop.id WHERE orders.user_id = ? AND groups.established = 0',
    [req.query.userId]
  );

  let item = [];
  for (let i = 0; i < booking.length; i++) {
    let element = booking[i];
    element = { ...element, daysleft: element.eating_date.split('-') };
    item.push(element);
  }

  //   console.log(item);

  return res.json({ booking: item });
});

module.exports = router;
