const express = require('express');
const router = express.Router();

//db連線模組
const pool = require('../utils/db');

//TODO: 取得 group 的全部列表
router.get('/', async (request, response, next) => {
  // SELECT shop.name,shop.img,groups.end_time,groups.eating_date,groups.now_num,groups.goal_num FROM shop,groups WHERE shop.id=groups.shop_id
  let [data] = await pool.execute(
    'SELECT shop.name,shop.img,groups.id,groups.end_time,groups.eating_date,groups.now_num,groups.goal_num,type.name AS type_name FROM shop ,groups,shop_and_type, type WHERE shop.id=shop_and_type.shop_id AND shop.id=groups.shop_id AND type.id=shop_and_type.type_id GROUP BY groups.id '
  );

  //全部資料筆數
  const total = data.length;
  console.log('總共幾筆', total);
  console.log(
    '最後日期',
    data.map((v, i) => {
      return v.end_time;
    })
  );
  let todayDate = new Date();
  console.log('今天的日期', todayDate);

  //取得目前在第幾頁
  let page = request.query.page || 1;
  console.log('目前在第幾頁', page);

  //計算總共有幾頁
  const perPage = 8;
  const lastPage = Math.ceil(total / perPage);
  console.log('共幾頁', lastPage);

  //計算 offset 是多少
  let offset = (page - 1) * perPage;
  console.log('總共要跳過幾筆', offset);

  //取得這頁資料
  let [pageResult] = await pool.execute(
    'SELECT shop.name,shop.img,groups.id,groups.end_time,groups.eating_date,groups.now_num,groups.goal_num,type.name AS type_name FROM shop ,groups,shop_and_type, type WHERE shop.id=shop_and_type.shop_id AND shop.id=groups.shop_id AND type.id=shop_and_type.type_id GROUP BY groups.id ORDER BY groups.id ASC LIMIT ? OFFSET ?',
    [perPage, offset]
  );

  // let item = [];
  // for (let i = 0; i < data.length; i++) {
  //   let element = data[i];
  //   element = { ...element, daysleft: element.eating_date.split('-') };
  //   item.push(element);
  // }

  //回給前端
  response.json({
    //頁碼
    pagination: {
      total,
      lastPage,
      page,
    },
    //真的資料
    data: pageResult,
    // type: typeResult,
  });
});

//TODO: 取得單一 shop 詳細頁
router.get('/:groupId', async (request, response, next) => {
  let [data] = await pool.execute(
    'SELECT shop.name,shop.phone,shop.address,shop.description,shop.img,shop.banner,groups.* FROM shop,groups WHERE shop.id=groups.shop_id AND groups.id=?',
    [request.params.groupId]
  );
  response.json(data);
});

module.exports = router;

//sql 加上type
// SELECT shop.name,shop.img,groups.end_time,groups.eating_date,groups.now_num,groups.goal_num,type.name AS type_name FROM shop ,groups,shop_and_type, type WHERE shop.id=shop_and_type.shop_id AND shop.id=groups.shop_id AND type.id=shop_and_type.type_id

//取 還未到結團的日期
// SELECT shop.name,shop.img,groups.id,groups.end_time,groups.eating_date,groups.now_num,groups.goal_num,GROUP_CONCAT(type.name) AS type_name FROM shop ,groups,shop_and_type, type WHERE shop.id=shop_and_type.shop_id AND shop.id=groups.shop_id AND type.id=shop_and_type.type_id GROUP BY groups.id