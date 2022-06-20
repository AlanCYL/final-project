//express
const express = require('express');
const app = express();

// 跨源 cors
const cors = require('cors');
app.use(cors());

// 環境變數
require('dotenv').config();

//db連線模組
const pool = require('./utils/db');

//一定要放- ->才能解析req.body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//nodejs內建套件用來處理路徑
const path = require('path');
//處理靜態資料 不指定網址 ex.使用者上傳圖片 http://localhost:3001/shopImg/DinTaiFung-1.jpg
app.use(express.static(path.join(__dirname, 'assets')));

//===============================================================以上是模組引用

//首頁
app.get('/', (request, respond, next) => {
  respond.send('首頁');
});

//shopRegister
const shopRegister = require('./routers/shopRegister');
app.use('/api/shop', shopRegister);

//===============================================================以下是錯誤處理
//404
app.use((req, res, next) => {
  res.status(404).send('404 not found');
});

//5xx  伺服器端錯誤
app.use((err, req, res, next) => {
  res.status(500).send('server錯誤');
});

app.listen(3001, () => {
  console.log('server start at 3001');
});
