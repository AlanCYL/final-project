-- phpMyAdmin SQL Dump
-- version 5.1.3
-- https://www.phpmyadmin.net/
--
-- 主機： 127.0.0.1
-- 產生時間： 2022-06-20 09:32:26
-- 伺服器版本： 10.4.24-MariaDB
-- PHP 版本： 8.1.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";

--
-- 資料庫: `project`
--

-- --------------------------------------------------------

--
-- 資料表結構 `coupon`
--
-- 建立時間： 2022-06-18 02:24:14
--

DROP TABLE IF EXISTS `coupon`;
CREATE TABLE `coupon` (
  `id` int(30) UNSIGNED NOT NULL,
  `reason` varchar(50) NOT NULL,
  `price` int(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 傾印資料表的資料 `coupon`
--

INSERT INTO `coupon` (`id`, `reason`, `price`) VALUES
(1, '鑽石會員獨享優惠', 200),
(2, '綠寶石會員，新用戶好禮', 50),
(3, '四月壽星好禮', 300),
(4, '慶祝會員升級好禮', 500);

-- --------------------------------------------------------

--
-- 資料表結構 `dish`
--
-- 建立時間： 2022-06-18 02:24:14
--

DROP TABLE IF EXISTS `dish`;
CREATE TABLE `dish` (
  `id` int(30) NOT NULL,
  `name` varchar(100) NOT NULL,
  `image` varchar(100) DEFAULT NULL,
  `description` text NOT NULL,
  `shop_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 傾印資料表的資料 `dish`
--

INSERT INTO `dish` (`id`, `name`, `image`, `description`, `shop_id`) VALUES
(2, '義大利麵', 'pasta.png', '爆多的蒜末爆炒\r\n再搭上完美的白酒提味\r\n', 2),
(3, '炸雞', 'chicken.png', '多汁、酥脆、滑嫩、鹹香', 2),
(5, '披薩', 'pizza.png', '薄皮酥脆餡料豐盛搭配餡料豐盛搭配夏威夷風味', 2);

-- --------------------------------------------------------

--
-- 資料表結構 `groups`
--
-- 建立時間： 2022-06-18 02:24:14
--

DROP TABLE IF EXISTS `groups`;
CREATE TABLE `groups` (
  `id` int(5) UNSIGNED NOT NULL,
  `start_time` date NOT NULL,
  `end_time` date NOT NULL,
  `eating_date` date NOT NULL,
  `eating_time` int(30) NOT NULL,
  `now_num` int(30) NOT NULL,
  `goal_num` int(30) DEFAULT 0,
  `price` int(6) UNSIGNED NOT NULL,
  `shop_id` int(20) NOT NULL,
  `established` int(3) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 傾印資料表的資料 `groups`
--

INSERT INTO `groups` (`id`, `start_time`, `end_time`, `eating_date`, `eating_time`, `now_num`, `goal_num`, `price`, `shop_id`, `established`) VALUES
(1, '2022-04-01', '2022-04-10', '2022-04-15', 1, 2, 0, 350, 2, 0),
(2, '2022-04-02', '2022-04-15', '2022-04-19', 1, 3, 6, 200, 2, 0),
(3, '2022-04-20', '2022-04-20', '2022-04-30', 2, 7, 6, 100, 3, 0),
(4, '2022-04-11', '2022-04-16', '2022-04-19', 3, 4, 10, 1500, 4, 0),
(5, '2022-04-01', '2022-04-11', '2022-05-12', 92846, 4, 6, 600, 2, 0),
(6, '2022-04-04', '2022-04-08', '2022-05-23', 150000, 4, 5, 50, 6, 0),
(7, '2022-03-30', '2022-04-05', '2022-05-21', 150000, 2, 8, 400, 7, 0),
(8, '2022-04-21', '2022-04-23', '2022-04-27', 201700, 2, 3, 200, 2, 0),
(9, '2022-04-22', '2022-04-27', '2022-04-29', 174500, 5, 2, 250, 1, 0),
(11, '2022-04-23', '2022-04-30', '2022-05-05', 180000, 6, 3, 250, 1, 0),
(12, '2022-04-13', '2022-04-16', '2022-04-19', 173000, 10, 15, 200, 2, 0),
(13, '2022-04-22', '2022-04-27', '2022-04-30', 175300, 2, 10, 200, 2, 0),
(14, '2022-04-22', '2022-04-28', '2022-04-30', 210100, 4, 10, 300, 2, 0),
(15, '2022-04-22', '2022-04-27', '2022-04-28', 150600, 3, 2, 200, 2, 0),
(17, '2022-04-12', '2022-04-15', '2022-04-19', 173459, 4, 3, 200, 5, 0),
(18, '2022-04-22', '2022-04-28', '2022-04-30', 183450, 3, 7, 150, 5, 0),
(19, '2022-04-15', '2022-04-22', '2022-04-25', 180000, 4, 5, 200, 8, 0),
(20, '2022-04-16', '2022-04-19', '2022-04-23', 183736, 3, 5, 250, 9, 0),
(21, '2022-04-23', '2022-04-28', '2022-04-30', 183736, 5, 2, 200, 9, 0),
(22, '2022-04-06', '2022-04-16', '2022-04-19', 183841, 3, 7, 250, 1, 0),
(23, '2022-04-21', '2022-04-28', '2022-04-30', 183841, 3, 9, 350, 1, 0),
(24, '2022-04-21', '2022-04-24', '2022-04-25', 121500, 3, 2, 350, 14, 0),
(25, '2022-04-22', '2022-04-27', '2022-04-28', 111500, 3, 2, 200, 11, 0),
(26, '2022-04-23', '2022-04-28', '2022-04-30', 100000, 5, 2, 200, 14, 0),
(27, '2022-04-13', '2022-04-16', '2022-04-19', 173000, 10, 3, 200, 10, 0),
(28, '2022-04-19', '2022-04-20', '2022-04-30', 92503, 7, 6, 100, 12, 0);

-- --------------------------------------------------------

--
-- 資料表結構 `groups_and_dish`
--
-- 建立時間： 2022-06-18 02:24:14
--

DROP TABLE IF EXISTS `groups_and_dish`;
CREATE TABLE `groups_and_dish` (
  `id` int(30) NOT NULL,
  `groups_id` int(30) NOT NULL,
  `dish_id` int(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 傾印資料表的資料 `groups_and_dish`
--

INSERT INTO `groups_and_dish` (`id`, `groups_id`, `dish_id`) VALUES
(1, 2, 1),
(2, 2, 2),
(3, 2, 3),
(4, 2, 4);

-- --------------------------------------------------------

--
-- 資料表結構 `level_name`
--
-- 建立時間： 2022-06-18 02:24:14
--

DROP TABLE IF EXISTS `level_name`;
CREATE TABLE `level_name` (
  `id` int(2) UNSIGNED NOT NULL,
  `name` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- 傾印資料表的資料 `level_name`
--

INSERT INTO `level_name` (`id`, `name`) VALUES
(1, '綠寶石'),
(2, '藍寶石'),
(3, '紅寶石'),
(4, '鑽石');

-- --------------------------------------------------------

--
-- 資料表結構 `orders`
--
-- 建立時間： 2022-06-18 02:24:14
--

DROP TABLE IF EXISTS `orders`;
CREATE TABLE `orders` (
  `id` int(30) NOT NULL,
  `user_id` int(30) NOT NULL,
  `groups_id` int(30) NOT NULL,
  `payable` int(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- 傾印資料表的資料 `orders`
--

INSERT INTO `orders` (`id`, `user_id`, `groups_id`, `payable`) VALUES
(1, 3, 1, 0),
(2, 4, 1, 0),
(3, 5, 1, 0);

-- --------------------------------------------------------

--
-- 資料表結構 `receipt`
--
-- 建立時間： 2022-06-18 02:24:14
--

DROP TABLE IF EXISTS `receipt`;
CREATE TABLE `receipt` (
  `id` int(11) NOT NULL,
  `orders_id` int(11) NOT NULL,
  `total` int(100) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- 資料表結構 `shop`
--
-- 建立時間： 2022-06-18 02:24:14
--

DROP TABLE IF EXISTS `shop`;
CREATE TABLE `shop` (
  `id` int(3) NOT NULL,
  `name` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `account` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone` varchar(40) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `address` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `img` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `banner` varchar(1000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 傾印資料表的資料 `shop`
--

INSERT INTO `shop` (`id`, `name`, `account`, `password`, `phone`, `address`, `description`, `img`, `banner`) VALUES
(1, '村民食堂', 'villager@test.com', '111', '03-339-868', '桃園市桃園區中正路1078號', '無距離享受與自然和諧共處，讓每個人在繁忙之餘，也能擁有輕鬆的步調，與家人朋友相聚用餐，共享歡樂！', 'Villager.jpg', ''),
(2, 'NINI 尼尼義大利餐廳', 'NINI@test.com', '222', '03-222-3271', '桃園市蘆竹區南崁路一段112號', 'NINI《NATURAL自然、INITIAL獨創、NEAT純淨、IMPRESSIVE感動》我們相信用好的食材與料理方式，就能對自我和環境產生正向的改變；透過好的用餐環境，讓顧客們和我們一樣愛上這樣的生活方式。', 'NINI.jpg', ''),
(3, '梳子．Salud', 'Salud@test.com', '333', '02-2711-8832', '330桃園市桃園區新埔六街89', '由川門子團隊帶來，西班牙式的Tapas碰上川式料理蹦出！精緻美味小餐點！搭配無毒生菜、德國有機農莊，希望提供給您一個全新體驗的蔬食。自然的用餐環境，讓您留下美好的身影：）', 'Salud.jpg', ''),
(4, '點水樓', 'DianShuiLou@test.com', '444', '03-222-7979', '338桃園市蘆竹區中正路1號5樓', '主打江南料理、點心，菜系遼闊又精緻，\r\n包含了杭幫、蘇幫、揚幫、滬幫、甬幫等菜\r\n式名餚。 目前已有多家分店。 南京店、\r\n懷寧店的空間尤其值得稱道，名家書畫、\r\n骨董藝品、木雕窗花和室內裝潢造景，都頗有品味。', 'DianShuiLou.jpg', ''),
(5, '陶板屋', 'kangyaolife@test.com', '555', '03-280-7070', '320桃園市中壢區中山路111號2', '保留日本料理的精緻文化，和風洋食融合精神\r\n，色味俱佳的創作料理上桌，一場融合視覺、味覺的全新饗宴，', 'Kangyaolife.jpg', ''),
(6, '藝奇新日本料理', 'Yichi@test.com', '666', '03-339-8680', '330桃園市桃園區南華街60號', '汲取，日本專注細節。講究，當旬新鮮食材。\r\n添加，職人手藝創意。以靈感、巧思加持 \r\n激盪東京時尚料理新風貌', 'Yichi.jpg', ''),
(7, '王品牛排', 'wowprime@test.com', '777', '03-356-1887', '330桃園市桃園區同德五街69號3F', '台灣經典牛排，最多華人肯定牛排餐廳，\r\n一頭牛，僅供6客王品牛小排，\r\n新鮮蔬果與特殊佐料醃浸2天2夜，\r\n經歷250℃高溫，慢火烘烤1.5小時，\r\n完美展現經典牛排的香嫩風華', 'Wowprime.jpg', ''),
(8, '添好運', 'timhowan@test.com', '888', '03-468-0678', '320桃園市中壢區中園路二段501號', '麥桂培師傅於港式點心領域有近四十年的經歷，\r\n為了提供一般民眾可負擔的「美味平民點心」，\r\n希望讓大眾都能品嚐到平價且美味的點心，於2009年成立添好運點心專門店，\r\n不但迅速獲得米其林一星的肯定，並成為各國饕客到香港必定朝聖的美味名店！', 'Timhowan.jpg', ''),
(9, '品田牧場', 'pinnada@test.com', '999', '03-455-3881', '桃園市中壢區中華路二段501號2樓', '台灣最多人吃的日式豬排，現點現炸，\r\n獨創全台使用雙油槽，先低溫後高溫油炸法，\r\n鎖住肉汁美味，同時保留麵衣的酥脆站立感，\r\n皮肉外酥內嫩的完美結合，滿足全台每年超過\r\n250萬饕客味蕾(平均每10人就有1人吃過)。\r\n提供五大風味菜系，讓您品嚐豬排料理的匠心美味。', 'Pinnada.jpg', ''),
(10, '一風堂拉麵', 'ippudo@test.com', '1010', ' 03-261-3220', '320桃園市中壢區高鐵北路一段6號', '一風堂源自日本九州豚骨拉麵之都福岡博多，\r\n由享譽國際的神級拉麵大王河原成美所創立，\r\n台灣一風堂創立於2012年，至今在台灣北、中\r\n、南各地已設立超過10家店舖，除了一般拉麵\r\n餐廳業態外，亦設立快速、便利的一風堂EXPRESS\r\n業態，以及極具特色的拉麵居酒屋業態。', 'ippudo.jpg', ''),
(11, '漢來海港', 'Harbour@test.com', '1111', '07-412-8068', '338桃園市蘆竹區南崁路一段112號6樓', '995年漢來美食在南台灣高雄隆重誕生，\r\n擁有專業的廚師與服務團隊、深厚的國際\r\n飯店及美食集團經營管理，堅持在地與優\r\n質進口食材，提供多元美食料理，以及最\r\n佳品質的專業服務。', 'Harbour.jpg', ''),
(12, '饗泰多', 'siammore@test.com', '1212', '03-337-1808', '330桃園市桃園區中正路61號統領廣場號6樓', '饗泰多就是我們長期接觸現代泰國文化後，\r\n 為了提供台灣朋友與曼谷文化接軌的實踐，\r\n 希望藉由最多人相聚歡。', 'siammore.jpg', ''),
(13, '麥當勞桃園', 'mcdonaldr@test.com', '1313', '03-339-868', '330桃園市桃園區中正路50號', '老字號的經典連鎖速食店，以漢堡和薯條聞名。', 'McDonald.jpg', ''),
(14, '肯德基 桃園中山二餐廳', 'kfcclub@test.com', '1515', '03-336-0860', '330桃園市桃園區中山路444號446號', '肯德基是源自美國的速食連鎖店， 總部設於肯塔基州路易維爾市，以炸雞為主力產品。', 'kfc.jpg', '');

-- --------------------------------------------------------

--
-- 資料表結構 `shop_and_type`
--
-- 建立時間： 2022-06-18 02:24:14
--

DROP TABLE IF EXISTS `shop_and_type`;
CREATE TABLE `shop_and_type` (
  `id` int(100) NOT NULL,
  `shop_id` int(100) NOT NULL,
  `type_id` int(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- 資料表結構 `type`
--
-- 建立時間： 2022-06-18 02:24:14
--

DROP TABLE IF EXISTS `type`;
CREATE TABLE `type` (
  `id` int(3) NOT NULL,
  `name` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- 傾印資料表的資料 `type`
--

INSERT INTO `type` (`id`, `name`) VALUES
(1, '中式'),
(2, '台式'),
(3, '港澳'),
(4, '日式'),
(5, '韓式'),
(6, '東南'),
(7, '南洋'),
(8, '美式'),
(9, '英式'),
(10, '歐式');

-- --------------------------------------------------------

--
-- 資料表結構 `user`
--
-- 建立時間： 2022-06-18 02:26:28
-- 最後更新： 2022-06-18 02:26:29
--

DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(30) NOT NULL,
  `name` varchar(100) NOT NULL,
  `identity_card` varchar(20) NOT NULL,
  `password` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `nick_name` varchar(100) NOT NULL,
  `phone` varchar(100) NOT NULL,
  `bir` date NOT NULL,
  `mail` varchar(30) NOT NULL,
  `img` int(1) UNSIGNED NOT NULL DEFAULT 1,
  `level` int(10) UNSIGNED NOT NULL DEFAULT 1,
  `create_time` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 傾印資料表的資料 `user`
--

INSERT INTO `user` (`id`, `name`, `identity_card`, `password`, `nick_name`, `phone`, `bir`, `mail`, `img`, `level`, `create_time`) VALUES
(1, '野比大雄', 'F124596125', '827ccb0eea8a706c4c34a16891f84e', '大雄', '0975136088', '1998-04-14', 'nobita1@doraemon.com', 1, 3, '2022-04-18 20:50:51'),
(2, '野原新之助', 'H142578953', '827ccb0eea8a706c4c34a16891f84e', '小新', '0978153644', '1978-07-08', 'shin@shin-chan.com', 1, 3, '2022-04-19 09:01:05'),
(3, '野原美冴', 'A221047856', '827ccb0eea8a706c4c34a16891f84e', '大屁股麻馬', '0932156744', '1980-05-15', 'misae@shin-chan.com', 1, 4, '2022-04-19 13:41:39'),
(4, '哆啦A夢', 'H154789356', '827ccb0eea8a706c4c34a16891f84e', '小叮噹', '0936157428', '1995-10-23', 'doraemon@doraemon.com', 1, 1, '2022-04-19 13:43:32'),
(5, '野原廣志', 'Y154769853', '827ccb0eea8a706c4c34a16891f84e', '臭腳丫把拔', '0914758963', '1986-12-25', 'hiroshi@shin-chan.com', 1, 1, '2022-04-19 13:44:42'),
(6, '源靜香', 'N221698743', '827ccb0eea8a706c4c34a16891f84e', '靜香', '0963258419', '1996-02-18', 'shizuka@doraemon.com', 1, 4, '2022-04-19 13:47:04'),
(7, '剛田武', 'L126957413', '827ccb0eea8a706c4c34a16891f84e', '胖虎', '0985136489', '1995-06-15', 'takeshi@doraemon.com', 1, 3, '2022-04-19 13:49:06'),
(8, 'MiuPig', 'H126357489', '827ccb0eea8a706c4c34a16891f84e', '11111', '097514645', '1954-12-31', 'miu@pig.com', 1, 2, '2022-04-19 16:43:36'),
(9, 'MiuPig', 'F125984653', '827ccb0eea8a706c4c34a16891f84e', '1111111', '097514855', '1985-05-27', 'miu@pig.com', 1, 2, '2022-04-19 16:46:08'),
(10, 'magggie', 'F125846951', '827ccb0eea8a706c4c34a16891f84e', 'maggie', '0974156388', '1998-06-14', 'miu@pig.com', 1, 2, '2022-04-19 16:50:58'),
(11, '12345', 'H147523698', '827ccb0eea8a706c4c34a16891f84e', '123', '091456789', '1995-08-08', 'akosakposkapo@gmail.com', 1, 2, '2022-04-20 12:47:25'),
(12, '12345', 'H124596315', '827ccb0eea8a706c4c34a16891f84e', '12345', '097513544', '1999-01-01', 'miu', 1, 2, '2022-04-20 13:31:08'),
(13, '陶1S', 'H224591756', '827ccb0eea8a706c4c34a16891f84e', '陶樂比', '0975148566', '1993-09-07', 'taolebe@dreamland.com', 1, 1, '2022-04-21 17:36:12'),
(14, 'MiuMiu', 'H124695123', '827ccb0eea8a706c4c34a16891f84e', '12345', '0975148522', '1994-05-09', 'miu@pig.com', 1, 1, '2022-04-21 17:56:36');

-- --------------------------------------------------------

--
-- 資料表結構 `user_and_coupon`
--
-- 建立時間： 2022-06-18 02:24:14
--

DROP TABLE IF EXISTS `user_and_coupon`;
CREATE TABLE `user_and_coupon` (
  `id` int(30) NOT NULL,
  `coupon_id` int(30) NOT NULL,
  `user_id` int(30) NOT NULL,
  `valid` tinyint(2) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 傾印資料表的資料 `user_and_coupon`
--

INSERT INTO `user_and_coupon` (`id`, `coupon_id`, `user_id`, `valid`) VALUES
(1, 1, 3, 1),
(2, 2, 2, 1),
(3, 2, 10, 1),
(4, 2, 13, 1),
(5, 2, 14, 1),
(6, 2, 15, 1),
(7, 3, 1, 1),
(8, 4, 3, 0);

-- --------------------------------------------------------

--
-- 資料表結構 `user_shop`
--
-- 建立時間： 2022-06-18 02:24:14
--

DROP TABLE IF EXISTS `user_shop`;
CREATE TABLE `user_shop` (
  `id` int(30) NOT NULL,
  `user_id` int(30) NOT NULL,
  `shop_id` int(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- 已傾印資料表的索引
--

--
-- 資料表索引 `coupon`
--
ALTER TABLE `coupon`
  ADD PRIMARY KEY (`id`);

--
-- 資料表索引 `dish`
--
ALTER TABLE `dish`
  ADD PRIMARY KEY (`id`),
  ADD KEY `shop_id` (`shop_id`);

--
-- 資料表索引 `groups`
--
ALTER TABLE `groups`
  ADD PRIMARY KEY (`id`),
  ADD KEY `shop_id` (`shop_id`);

--
-- 資料表索引 `groups_and_dish`
--
ALTER TABLE `groups_and_dish`
  ADD PRIMARY KEY (`id`),
  ADD KEY `groups_id` (`groups_id`),
  ADD KEY `dish_id` (`dish_id`);

--
-- 資料表索引 `level_name`
--
ALTER TABLE `level_name`
  ADD PRIMARY KEY (`id`);

--
-- 資料表索引 `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`);

--
-- 資料表索引 `receipt`
--
ALTER TABLE `receipt`
  ADD PRIMARY KEY (`id`);

--
-- 資料表索引 `shop`
--
ALTER TABLE `shop`
  ADD PRIMARY KEY (`id`);

--
-- 資料表索引 `shop_and_type`
--
ALTER TABLE `shop_and_type`
  ADD PRIMARY KEY (`id`);

--
-- 資料表索引 `type`
--
ALTER TABLE `type`
  ADD PRIMARY KEY (`id`);

--
-- 資料表索引 `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- 資料表索引 `user_and_coupon`
--
ALTER TABLE `user_and_coupon`
  ADD PRIMARY KEY (`id`),
  ADD KEY `coupon_id` (`coupon_id`),
  ADD KEY `user_id` (`user_id`);

--
-- 資料表索引 `user_shop`
--
ALTER TABLE `user_shop`
  ADD PRIMARY KEY (`id`);

--
-- 在傾印的資料表使用自動遞增(AUTO_INCREMENT)
--

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `coupon`
--
ALTER TABLE `coupon`
  MODIFY `id` int(30) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `dish`
--
ALTER TABLE `dish`
  MODIFY `id` int(30) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `groups`
--
ALTER TABLE `groups`
  MODIFY `id` int(5) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `groups_and_dish`
--
ALTER TABLE `groups_and_dish`
  MODIFY `id` int(30) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `level_name`
--
ALTER TABLE `level_name`
  MODIFY `id` int(2) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `orders`
--
ALTER TABLE `orders`
  MODIFY `id` int(30) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `receipt`
--
ALTER TABLE `receipt`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `shop`
--
ALTER TABLE `shop`
  MODIFY `id` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `shop_and_type`
--
ALTER TABLE `shop_and_type`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `type`
--
ALTER TABLE `type`
  MODIFY `id` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `user`
--
ALTER TABLE `user`
  MODIFY `id` int(30) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `user_and_coupon`
--
ALTER TABLE `user_and_coupon`
  MODIFY `id` int(30) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `user_shop`
--
ALTER TABLE `user_shop`
  MODIFY `id` int(30) NOT NULL AUTO_INCREMENT;
COMMIT;
