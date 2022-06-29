-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- 主機： localhost:8889
-- 產生時間： 2022 年 06 月 29 日 23:39
-- 伺服器版本： 5.7.34
-- PHP 版本： 8.0.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- 資料庫： `project`
--

-- --------------------------------------------------------

--
-- 資料表結構 `coupon`
--

CREATE TABLE `coupon` (
  `id` int(30) UNSIGNED NOT NULL,
  `reason` varchar(50) NOT NULL,
  `price` int(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 傾印資料表的資料 `coupon`
--

INSERT INTO `coupon` (`id`, `reason`, `price`) VALUES
(1, '夏天就是要相聚，Unii在酷熱炎夏，在你心裡注入一股沁涼。', 200),
(2, 'Oh～Bye，少說一點，想陪你不只一天，多一點，讓我心甘情願～Unii友你!\n', 250),
(3, '抓住春天的尾巴，迎接美好的夏日戀曲，讓我們一起在餐桌上尋找下一個適合的你，Unii!', 300),
(4, 'BTS單飛不解散，Army們別傷心，有我友你!', 100);

-- --------------------------------------------------------

--
-- 資料表結構 `dish`
--

CREATE TABLE `dish` (
  `id` int(30) NOT NULL,
  `name` varchar(100) NOT NULL,
  `price` varchar(25) NOT NULL,
  `description` text NOT NULL,
  `photo` varchar(100) DEFAULT NULL,
  `shop_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 傾印資料表的資料 `dish`
--

INSERT INTO `dish` (`id`, `name`, `price`, `description`, `photo`, `shop_id`) VALUES
(1, '小籠包', '200', '麵皮均勻薄嫩，肉汁飽滿', '/shopbackstage/bow.png', 3),
(2, '排骨蛋炒飯', '280', '每口咀嚼皆富含蛋香與蔥香，滋味極為鮮美爽口', '/shopbackstage/rice.png', 3),
(3, '煲湯', '200', '鮮美 料豐富', '/shopbackstage/min1.png', 1),
(4, '蘿蔔糕', '200', '糕體軟嫩', '/shopbackstage/min2.png', 1);

-- --------------------------------------------------------

--
-- 資料表結構 `groups`
--

CREATE TABLE `groups` (
  `id` int(5) UNSIGNED NOT NULL,
  `start_time` date NOT NULL,
  `end_time` date NOT NULL,
  `eating_date` date NOT NULL,
  `eating_time` int(30) NOT NULL,
  `now_num` int(30) NOT NULL DEFAULT '0',
  `goal_num` int(20) NOT NULL,
  `price` int(6) UNSIGNED NOT NULL,
  `shop_id` int(20) NOT NULL,
  `established` int(3) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 傾印資料表的資料 `groups`
--

INSERT INTO `groups` (`id`, `start_time`, `end_time`, `eating_date`, `eating_time`, `now_num`, `goal_num`, `price`, `shop_id`, `established`) VALUES
(1, '2022-04-13', '2022-04-18', '2022-04-20', 2, 5, 6, 250, 1, 0),
(2, '2022-04-15', '2022-04-19', '2022-04-23', 1, 3, 6, 200, 2, 0),
(3, '2022-04-10', '2022-04-20', '2022-04-26', 3, 2, 5, 300, 3, 0),
(4, '2022-04-23', '2022-04-29', '2022-05-02', 3, 2, 5, 200, 6, 0),
(5, '2022-05-02', '2022-05-12', '2022-05-20', 3, 5, 4, 250, 2, 0),
(6, '2022-05-06', '2022-05-15', '2022-05-20', 3, 4, 6, 300, 6, 0),
(7, '2022-05-12', '2022-05-20', '2022-05-27', 2, 5, 6, 350, 2, 0),
(8, '2022-05-28', '2022-06-10', '2022-06-18', 3, 2, 5, 300, 3, 0),
(9, '2022-06-10', '2022-06-19', '2022-06-26', 2, 5, 3, 300, 2, 0),
(10, '2022-06-17', '2022-06-24', '2022-06-28', 2, 5, 3, 300, 1, 0),
(11, '2022-06-28', '2022-07-10', '2022-07-16', 2, 4, 6, 300, 3, 0),
(12, '2022-06-29', '2022-07-13', '2022-07-19', 2, 0, 4, 200, 5, 0),
(13, '2022-06-29', '2022-07-13', '2022-07-20', 3, 0, 2, 200, 1, 0);

-- --------------------------------------------------------

--
-- 資料表結構 `groups_and_dish`
--

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
-- 資料表結構 `orders`
--

CREATE TABLE `orders` (
  `id` int(30) NOT NULL,
  `user_id` int(30) NOT NULL,
  `groups_id` int(30) NOT NULL,
  `payable` int(30) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- 傾印資料表的資料 `orders`
--

INSERT INTO `orders` (`id`, `user_id`, `groups_id`, `payable`) VALUES
(1, 3, 1, 0),
(2, 4, 1, 1),
(3, 5, 1, 0),
(4, 6, 1, 1),
(5, 2, 2, 1),
(6, 1, 4, 0),
(7, 2, 5, 0);

-- --------------------------------------------------------

--
-- 資料表結構 `receipt`
--

CREATE TABLE `receipt` (
  `id` int(11) NOT NULL,
  `orders_id` int(11) NOT NULL,
  `total` int(100) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- 傾印資料表的資料 `receipt`
--

INSERT INTO `receipt` (`id`, `orders_id`, `total`) VALUES
(1, 1, 250),
(2, 2, 250),
(3, 3, 200),
(4, 4, 250);

-- --------------------------------------------------------

--
-- 資料表結構 `shop`
--

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
(1, '村民食堂', 'villager@test.com', '123456', '03-339-868', '桃園市桃園區中正路1078號', '無距離享受與自然和諧共處，讓每個人在繁忙之餘，也能擁有輕鬆的步調，與家人朋友相聚用餐，共享歡樂！', '/shopImg/Villager.jpg', '/shopBanner/Villager.jpg'),
(2, '添好運', 'timhowan@test.com', '123456', '03-468-0678', '320桃園市中壢區中園路二段501號', '麥桂培師傅於港式點心領域有近四十年的經歷，\n為了提供一般民眾可負擔的「美味平民點心」，\n希望讓大眾都能品嚐到平價且美味的點心，於2009年成立添好運點心專門店，\n不但迅速獲得米其林一星的肯定，並成為各國饕客到香港必定朝聖的美味名店！', '/shopImg/Timhowan.jpg', '/shopBanner/Timhowan.jpg'),
(3, '鼎泰豐', 'DinTaiFung@test.com', '123456', '02-8772-0528', '台北市忠孝東路三段３００號Ｂ２', '鼎泰豐是臺灣一家以麵食產銷為主的連鎖餐廳，以小籠包聞名。1958年開設於臺北市信義路，最初爲流行而於1970年代起兼賣小籠包，從此發跡。', '/shopImg/DinTaiFung.jpg', '/shopBanner/DinTaiFung.jpg'),
(4, '饗泰多', 'siammore@test.com', '123456', '03-337-1808', '330桃園市桃園區中正路61號統領廣場號6樓', '饗泰多就是我們長期接觸現代泰國文化後，\r\n 為了提供台灣朋友與曼谷文化接軌的實踐，\r\n 希望藉由最多人相聚歡。', '/shopImg/Siammore.jpg', '/shopBanner/Siammore.jpg'),
(5, '陶板屋', 'kangyaolife@test.com', '123456', '03-280-7070', '320桃園市中壢區中山路111號2', '保留日本料理的精緻文化，和風洋食融合精神\r\n，色味俱佳的創作料理上桌，一場融合視覺、味覺的全新饗宴，', '/shopImg/Kangyaolife.jpg', '/shopBanner/Kangyaolife.jpg'),
(6, '一風堂拉麵', 'ippudo@test.com', '123456', ' 03-261-3220', '320桃園市中壢區高鐵北路一段6號', '一風堂源自日本九州豚骨拉麵之都福岡博多，\r\n由享譽國際的神級拉麵大王河原成美所創立，\r\n台灣一風堂創立於2012年，至今在台灣北、中\r\n、南各地已設立超過10家店舖，除了一般拉麵\r\n餐廳業態外，亦設立快速、便利的一風堂EXPRESS\r\n業態，以及極具特色的拉麵居酒屋業態。', '/shopImg/ippudo.jpg', '/shopBanner/ippudo.jpg'),
(7, '品田牧場', 'pinnada@test.com', '123456', '03-455-3881', '桃園市中壢區中華路二段501號2樓', '台灣最多人吃的日式豬排，現點現炸，\r\n獨創全台使用雙油槽，先低溫後高溫油炸法，\r\n鎖住肉汁美味，同時保留麵衣的酥脆站立感，\r\n皮肉外酥內嫩的完美結合，滿足全台每年超過\r\n250萬饕客味蕾(平均每10人就有1人吃過)。\r\n提供五大風味菜系，讓您品嚐豬排料理的匠心美味。', '/shopImg/Pinnada.jpg', '/shopBanner/Pinnada.jpg'),
(8, '藝奇新日本料理', 'Yichi@test.com', '123456', '03-339-8680', '330桃園市桃園區南華街60號', '汲取，日本專注細節。講究，當旬新鮮食材。\r\n添加，職人手藝創意。以靈感、巧思加持 \r\n激盪東京時尚料理新風貌', '/shopImg/Yichi.jpg', '/shopBanner/Yichi.jpg'),
(9, '麥當勞桃園', 'mcdonaldr@test.com', '123456', '03-339-868', '330桃園市桃園區中正路50號', '老字號的經典連鎖速食店，以漢堡和薯條聞名。', '/shopImg/McDonald.jpg', '/shopBanner/McDonald.jpg'),
(10, '點水樓', 'DianShuiLou@test.com', '123456', '03-222-7979', '338桃園市蘆竹區中正路1號5樓', '主打江南料理、點心，菜系遼闊又精緻，\r\n包含了杭幫、蘇幫、揚幫、滬幫、甬幫等菜\r\n式名餚。 目前已有多家分店。 南京店、\r\n懷寧店的空間尤其值得稱道，名家書畫、\r\n骨董藝品、木雕窗花和室內裝潢造景，都頗有品味。', '/shopImg/DianShuiLou.jpg', '/shopBanner/DianShuiLou.jpg'),
(11, '肯德基 桃園', 'kfcclub@test.com', '123456', '03-336-0860', '330桃園市桃園區中山路444號446號', '肯德基是源自美國的速食連鎖店， 總部設於肯塔基州路易維爾市，以炸雞為主力產品。', '/shopImg/kfc.jpg', '/shopBanner/kfc.jpg'),
(12, '漢來海港', 'Harbour@test.com', '123456', '07-412-8068', '338桃園市蘆竹區南崁路一段112號6樓', '1995年漢來美食在南台灣高雄隆重誕生，\n擁有專業的廚師與服務團隊、深厚的國際\n飯店及美食集團經營管理，堅持在地與優\n質進口食材，提供多元美食料理，以及最\n佳品質的專業服務。', '/shopImg/Harbour.jpg', '/shopBanner/Harbour.jpg'),
(13, 'NINI 尼尼義大利餐廳', 'NINI@test.com', '123456', '03-222-3271', '桃園市蘆竹區南崁路一段112號', 'NINI《NATURAL自然、INITIAL獨創、NEAT純淨、IMPRESSIVE感動》我們相信用好的食材與料理方式，就能對自我和環境產生正向的改變；透過好的用餐環境，讓顧客們和我們一樣愛上這樣的生活方式。', '/shopImg/DinTaiFung.jpg', '/shopBanner/DinTaiFung.jpg'),
(14, '王品牛排', 'wowprime@test.com', '123456', '03-356-1887', '330桃園市桃園區同德五街69號3F', '台灣經典牛排，最多華人肯定牛排餐廳，\r\n一頭牛，僅供6客王品牛小排，\r\n新鮮蔬果與特殊佐料醃浸2天2夜，\r\n經歷250℃高溫，慢火烘烤1.5小時，\r\n完美展現經典牛排的香嫩風華', '/shopImg/Wowprime.jpg', '/shopBanner/Wowprime.jpg'),
(92, '123', '12@ee', '123456', '1123', '1234', '233tgtgfg', '/shopImg/DianShuiLou.jpg', '/shopBanner/DianShuiLou.jpg');

-- --------------------------------------------------------

--
-- 資料表結構 `shoppingcart`
--

CREATE TABLE `shoppingcart` (
  `id` int(30) NOT NULL,
  `user_id` int(30) NOT NULL,
  `group_id` int(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- 傾印資料表的資料 `shoppingcart`
--

INSERT INTO `shoppingcart` (`id`, `user_id`, `group_id`) VALUES
(1, 1, 1),
(2, 3, 2),
(3, 2, 1),
(4, 3, 1),
(5, 1, 2);

-- --------------------------------------------------------

--
-- 資料表結構 `shop_and_type`
--

CREATE TABLE `shop_and_type` (
  `id` int(100) NOT NULL,
  `shop_id` int(100) NOT NULL,
  `type_id` int(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- 傾印資料表的資料 `shop_and_type`
--

INSERT INTO `shop_and_type` (`id`, `shop_id`, `type_id`) VALUES
(1, 1, 2),
(2, 1, 12),
(3, 2, 2),
(4, 2, 11),
(5, 3, 2),
(6, 3, 0),
(7, 3, 11),
(8, 4, 5),
(9, 4, 11),
(10, 5, 3),
(11, 5, 11),
(12, 6, 3),
(13, 6, 11),
(14, 7, 3),
(15, 7, 11),
(16, 8, 3),
(17, 8, 11),
(18, 9, 6),
(19, 9, 11),
(20, 10, 1),
(21, 10, 2),
(22, 11, 6),
(23, 11, 11),
(24, 12, 7),
(25, 12, 12),
(26, 13, 7),
(27, 13, 11),
(28, 14, 6),
(29, 14, 11),
(44, 90, 5),
(45, 91, 0),
(46, 91, 1),
(47, 92, 0),
(48, 92, 5);

-- --------------------------------------------------------

--
-- 資料表結構 `type`
--

CREATE TABLE `type` (
  `id` int(3) NOT NULL,
  `name` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- 傾印資料表的資料 `type`
--

INSERT INTO `type` (`id`, `name`) VALUES
(0, '中式'),
(1, '台式'),
(2, '港澳'),
(3, '日式'),
(4, '韓式'),
(5, '泰式'),
(6, '美式'),
(7, '歐式'),
(8, '燒烤'),
(9, '火鍋'),
(10, '甜點'),
(11, '套餐'),
(12, '吃到飽'),
(13, '咖啡廳');

-- --------------------------------------------------------

--
-- 資料表結構 `user`
--

CREATE TABLE `user` (
  `id` int(30) NOT NULL,
  `name` varchar(100) NOT NULL,
  `identity_card` varchar(20) NOT NULL,
  `password` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `nick_name` varchar(100) NOT NULL,
  `phone` varchar(100) NOT NULL,
  `bir` date NOT NULL,
  `mail` varchar(30) NOT NULL,
  `img` int(1) UNSIGNED NOT NULL DEFAULT '1',
  `level` int(10) UNSIGNED NOT NULL DEFAULT '1',
  `create_time` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 傾印資料表的資料 `user`
--

INSERT INTO `user` (`id`, `name`, `identity_card`, `password`, `nick_name`, `phone`, `bir`, `mail`, `img`, `level`, `create_time`) VALUES
(1, '野比大雄', 'F124596125', '12345', '大雄', '0975136088', '1998-04-14', 'nobita1@doraemon.com', 4, 3, '2022-04-18 20:50:51'),
(2, '野原新之助', 'H142578953', '12345', '小新', '0978153644', '1978-07-08', 'shin@shin-chan.com', 1, 3, '2022-04-19 09:01:05'),
(3, '野原美冴', 'A221047856', '12345', '大屁股麻馬', '0932156744', '1980-05-15', 'misae@shin-chan.com', 1, 4, '2022-04-19 13:41:39'),
(4, '哆啦A夢', 'H154789356', '12345', '小叮噹', '0936157428', '1995-10-23', 'doraemon@doraemon.com', 1, 1, '2022-04-19 13:43:32'),
(5, '野原廣志', 'Y154769853', '12345', '臭腳丫把拔', '0914758963', '1986-12-25', 'hiroshi@shin-chan.com', 1, 1, '2022-04-19 13:44:42'),
(6, '源靜香', 'N221698743', '12345', '靜香', '0963258419', '1996-02-18', 'shizuka@doraemon.com', 1, 4, '2022-04-19 13:47:04'),
(7, '剛田武', 'L126957413', '12345', '胖虎', '0985136489', '1995-06-15', 'takeshi@doraemon.com', 1, 3, '2022-04-19 13:49:06'),
(8, 'MiuPig', 'H126357489', '12345', '11111', '097514645', '1954-12-31', 'miu@pig.com', 1, 2, '2022-04-19 16:43:36'),
(9, 'MiuPig', 'F125984653', '12345', '1111111', '097514855', '1985-05-27', 'miu@pig.com', 1, 2, '2022-04-19 16:46:08'),
(10, 'magggie', 'F125846951', '12345', 'maggie', '0974156388', '1998-06-14', 'miu@pig.com', 1, 2, '2022-04-19 16:50:58'),
(11, '12345', 'H147523698', '12345', '123', '091456789', '1995-08-08', 'akosakposkapo@gmail.com', 1, 2, '2022-04-20 12:47:25'),
(12, '12345', 'H124596315', '12345', '12345', '097513544', '1999-01-01', 'miu', 1, 2, '2022-04-20 13:31:08'),
(13, '陶1S', 'H224591756', '12345', '陶樂比', '0975148566', '1993-09-07', 'taolebe@dreamland.com', 1, 1, '2022-04-21 17:36:12'),
(14, 'MiuMiu', 'H123456789', '12345', '小明', '97463311', '1994-05-09', 'miu@pig.com', 3, 1, '2022-04-21 17:56:36'),
(15, '你好', 'H147258369', '12345', '123', '0975154236', '1994-05-11', 'adassdaddado@gmail.com', 1, 1, '2022-06-22 16:51:15'),
(16, '曾胖', 'F123711135', '12345', '曾小胖', '0970229788', '1995-03-07', 'miufat@piggyland.com', 3, 1, '2022-06-24 12:27:24');

-- --------------------------------------------------------

--
-- 資料表結構 `user_and_coupon`
--

CREATE TABLE `user_and_coupon` (
  `id` int(30) NOT NULL,
  `coupon_id` int(30) NOT NULL,
  `user_id` int(30) NOT NULL,
  `valid` tinyint(2) NOT NULL DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 傾印資料表的資料 `user_and_coupon`
--

INSERT INTO `user_and_coupon` (`id`, `coupon_id`, `user_id`, `valid`) VALUES
(1, 1, 3, 1),
(2, 2, 2, 0),
(3, 2, 10, 1),
(4, 2, 13, 0),
(7, 3, 1, 1),
(8, 4, 3, 0),
(9, 1, 1, 1),
(10, 1, 14, 0),
(11, 3, 14, 1),
(12, 2, 14, 1),
(13, 4, 14, 1);

-- --------------------------------------------------------

--
-- 資料表結構 `user_shop`
--

CREATE TABLE `user_shop` (
  `id` int(30) NOT NULL,
  `user_id` int(30) NOT NULL,
  `shop_id` int(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- 傾印資料表的資料 `user_shop`
--

INSERT INTO `user_shop` (`id`, `user_id`, `shop_id`) VALUES
(1, 1, 10),
(2, 1, 6),
(5, 1, 5),
(6, 1, 2),
(7, 2, 3),
(8, 2, 1),
(24, 14, 1),
(25, 14, 2);

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
  ADD PRIMARY KEY (`id`);

--
-- 資料表索引 `groups_and_dish`
--
ALTER TABLE `groups_and_dish`
  ADD PRIMARY KEY (`id`),
  ADD KEY `groups_id` (`groups_id`),
  ADD KEY `dish_id` (`dish_id`);

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
-- 資料表索引 `shoppingcart`
--
ALTER TABLE `shoppingcart`
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
  MODIFY `id` int(5) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `groups_and_dish`
--
ALTER TABLE `groups_and_dish`
  MODIFY `id` int(30) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `orders`
--
ALTER TABLE `orders`
  MODIFY `id` int(30) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `receipt`
--
ALTER TABLE `receipt`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `shop`
--
ALTER TABLE `shop`
  MODIFY `id` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=93;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `shoppingcart`
--
ALTER TABLE `shoppingcart`
  MODIFY `id` int(30) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `shop_and_type`
--
ALTER TABLE `shop_and_type`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=49;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `type`
--
ALTER TABLE `type`
  MODIFY `id` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `user`
--
ALTER TABLE `user`
  MODIFY `id` int(30) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `user_and_coupon`
--
ALTER TABLE `user_and_coupon`
  MODIFY `id` int(30) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=84;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `user_shop`
--
ALTER TABLE `user_shop`
  MODIFY `id` int(30) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
