-- MySQL dump 10.13  Distrib 5.7.38, for Linux (x86_64)
--
-- Host: localhost    Database: users
-- ------------------------------------------------------
-- Server version	5.7.38-0ubuntu0.18.04.1

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
-- Table structure for table `Users`
--

DROP TABLE IF EXISTS `Users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Users` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `userName` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(200) COLLATE utf8mb4_unicode_ci NOT NULL,
  `countryCode` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `mobileNumber` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `deviceToken` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT 'NULL',
  `os` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT 'NULL',
  `loginType` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT 'NULL',
  `facebookToken` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `googleToken` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `otp` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `latitude` double(10,6) NOT NULL,
  `longitude` double(10,6) NOT NULL,
  `refferalCode` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Users`
--

LOCK TABLES `Users` WRITE;
/*!40000 ALTER TABLE `Users` DISABLE KEYS */;
/*!40000 ALTER TABLE `Users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `administrator`
--

DROP TABLE IF EXISTS `administrator`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `administrator` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `mobileNumber` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` int(11) NOT NULL,
  `is_edit` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `deviceToken` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT 'NULL',
  `os` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT 'NULL',
  `loginType` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT 'NULL',
  `facebookToken` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `googleToken` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `role` int(11) NOT NULL DEFAULT '1',
  `db_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT 'user data base name',
  `pass_object` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `administrator`
--

LOCK TABLES `administrator` WRITE;
/*!40000 ALTER TABLE `administrator` DISABLE KEYS */;
INSERT INTO `administrator` VALUES (1,'Arun','rbot.live@gmail.com','1234657838','$2y$10$HlP38JUnOAcMRPeoiK0ylOEhc873fIwOQnXGQvVQMW/cjiCcvh7G6',1,'1','NULL','NULL','NULL','','',1,'bot','PsWK1234567897jpq','2022-10-04 04:13:30','2022-10-04 04:13:30'),(2,'Pradeesh','deesh.ds@gmail.com','7010147732','$2y$10$xIroE56zIZ18omZmAfWUv.qx8ykyPq4qqZDA759m1YSBv0Brlp2a6',1,'1','NULL','NULL','NULL','','',2,'rbot_DEESH.DS','0oTg12345678t2VHQ','2022-11-11 22:27:14','2022-11-11 22:27:14'),(3,'Jamwal','dspradish@gmail.com','9789093850','$2y$10$PRZH60efoCA2570zznZh6O.A0BqCQs0j/5FgFX3ftNU/dj2BYw.bm',1,'1','NULL','NULL','NULL','','',2,'rbot_DSPRADISH','q21n12345678lWUX1','2022-11-13 18:35:02','2022-11-13 18:35:02');
/*!40000 ALTER TABLE `administrator` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `rbot_record_config`
--

DROP TABLE IF EXISTS `rbot_record_config`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `rbot_record_config` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `free_record_count` int(11) DEFAULT '50',
  `free_period` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT 'monthly' COMMENT 'daily, monthly, yearly',
  `record_count` int(11) DEFAULT '0',
  `from_date` date DEFAULT NULL,
  `to_date` date DEFAULT NULL,
  `updated_at` datetime DEFAULT CURRENT_TIMESTAMP,
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rbot_record_config`
--

LOCK TABLES `rbot_record_config` WRITE;
/*!40000 ALTER TABLE `rbot_record_config` DISABLE KEYS */;
INSERT INTO `rbot_record_config` VALUES (1,1,NULL,NULL,NULL,NULL,NULL,'2022-10-04 04:13:30','2022-10-04 04:13:30'),(2,2,50,'monthly',50,'2022-11-11','2022-11-12','2022-11-11 22:27:19','2022-11-11 22:27:19'),(3,3,5,'daily',10,'2022-11-13','2022-11-13','2022-11-13 18:48:25','2022-11-13 18:35:06');
/*!40000 ALTER TABLE `rbot_record_config` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `rbot_record_config_history`
--

DROP TABLE IF EXISTS `rbot_record_config_history`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `rbot_record_config_history` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `record_count_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `record_count` int(11) NOT NULL,
  `from_date` date DEFAULT NULL,
  `to_date` date DEFAULT NULL,
  `updated_at` datetime DEFAULT CURRENT_TIMESTAMP,
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rbot_record_config_history`
--

LOCK TABLES `rbot_record_config_history` WRITE;
/*!40000 ALTER TABLE `rbot_record_config_history` DISABLE KEYS */;
/*!40000 ALTER TABLE `rbot_record_config_history` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `rbot_userrole`
--

DROP TABLE IF EXISTS `rbot_userrole`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `rbot_userrole` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `parent_id` int(11) NOT NULL,
  `user_type` int(11) NOT NULL COMMENT '1- super admin, 2 - admin, 3 - user',
  `updated_at` datetime DEFAULT CURRENT_TIMESTAMP,
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rbot_userrole`
--

LOCK TABLES `rbot_userrole` WRITE;
/*!40000 ALTER TABLE `rbot_userrole` DISABLE KEYS */;
INSERT INTO `rbot_userrole` VALUES (1,1,1,1,'2022-10-04 04:13:30','2022-10-04 04:13:30'),(2,2,1,2,'2022-11-11 22:27:14','2022-11-11 22:27:14'),(3,3,1,2,'2022-11-13 18:35:02','2022-11-13 18:35:02');
/*!40000 ALTER TABLE `rbot_userrole` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-11-27  5:30:00
