-- MySQL dump 10.13  Distrib 5.7.39, for osx11.0 (x86_64)
--
-- Host: 127.0.0.1    Database: dans
-- ------------------------------------------------------
-- Server version	5.7.39

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `refresh_token` text,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` (`id`, `name`, `email`, `password`, `refresh_token`, `createdAt`, `updatedAt`) VALUES (1,'Alif','test@gmail.com','$2b$10$5KoaGE9bHPtgOKRmQN86eO5iWrc8V012U5X9.b8H3LUvfeGChLTHK','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOjEsIm5hbWUiOiJBbGlmIiwiZW1haWwiOiJ0ZXN0QGdtYWlsLmNvbSIsImlhdCI6MTY5Njc2NDU2MCwiZXhwIjoxNjk2ODUwOTYwfQ.SU_IWr4otB44Zh7rg-0TxSnm_J-4PFGNSS2wlcrlp1U','2023-10-07 22:00:22','2023-10-08 11:29:20'),(4,'alif','tes@gmail.com','$2b$10$2D9QEctupxsj492sQFpFjO6tfYp/DPNvg.5xOXSXkGxn/Ikp5qY5.','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOjQsIm5hbWUiOiJhbGlmIiwiZW1haWwiOiJ0ZXNAZ21haWwuY29tIiwiaWF0IjoxNjk2ODE4MTIwLCJleHAiOjE2OTY5MDQ1MjB9.F2pV7nJliszwioZc0I4n_O_0iezIFXCTqFHmedbcwc0','2023-10-08 19:09:19','2023-10-09 02:22:00');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-10-09  9:23:01
