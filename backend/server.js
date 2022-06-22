//express
const express = require('express');
const app = express();

//nodejs內建套件用來處理路徑
const path = require('path');

// 環境變數
require('dotenv').config();

//session
const expressSession = require('express-session');
let FileStore = require('session-file-store')(expressSession);
app.use(
  expressSession({
    store: new FileStore({
      path: path.join(__dirname, '..', 'sessions'),
    }),
    resave: false,
    saveUninitialized: false,
    secret: process.env.SESSION_SECRET,
  })
);

// 跨源 cors
const cors = require('cors');
app.use(cors({ origin: ['http://localhost:3000'], credentials: true }));

//db連線模組
const pool = require('./utils/db');
const mysql = require('mysql2');

//一定要放- ->才能解析req.body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//處理靜態資料 不指定網址 ex.使用者上傳圖片 http://localhost:3001/shopImg/DinTaiFung-1.jpg
app.use(express.static(path.join(__dirname, 'assets')));

// 啟用 session
const expressSession = require('express-session');

//===============================================================以上是模組引用

//首頁
app.get('/', (request, respond, next) => {
  respond.send('首頁');
});

//shopRegister & Login
const shopRegister = require('./routers/shopRegister');
app.use('/api/shop', shopRegister);

//shoBackstage
const ShopBackstage = require('./routers/shopBackstage');
app.use('/api/shopbackstage', ShopBackstage);

//shoppingcart
const shoppingCart = require('./routers/shoppingCart');
app.use('/api/shoppingCart', shoppingCart);

//memberRegister & Login
const memberRegister = require('./routers/memberRegister');
app.use('/api/member', memberRegister);

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
