-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 17, 2024 at 07:51 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.0.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `inventory`
--

-- --------------------------------------------------------

--
-- Table structure for table `seller`
--

CREATE TABLE `seller` (
  `sellerName` varchar(20) NOT NULL,
  `sellerId` int(11) NOT NULL,
  `phone` int(11) NOT NULL,
  `address` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `seller`
--

INSERT INTO `seller` (`sellerName`, `sellerId`, `phone`, `address`) VALUES
('Ramesh Sharma', 1001, 2147483647, '45, Krishna Nagar, Delhi, India, 110001'),
('Priya Patel', 1002, 2147483647, '102, Gandhi Road, Mumbai, India, 400001'),
('Amit Singh', 1003, 2147483647, '23, Raja Bazar, Kolkata, India, 700001'),
('Vikram Patel', 1004, 2147483647, '12, Ashok Nagar, Bangalore, India, 560001'),
('Anjali Gupta', 1005, 2147483647, '34, Ramnagar, Chennai, India, 600001'),
('Rahul Verma', 1006, 2147483647, '56, Nehru Colony, Hyderabad, India, 500001'),
('Neha Singh', 1007, 2147483647, '78, Gandhi Nagar, Pune, India, 411001'),
('Priyanka Sharma', 1008, 2147483647, '90, Mahatma Road, Jaipur, India, 302001'),
('Deepak Kumar', 1009, 2147483647, '123, Patel Chowk, Ahmedabad, India, 380001'),
('Sunita Yadav', 1010, 2147483647, '45, Rajaji Nagar, Lucknow, India, 226001'),
('Sanjay Mishra', 1011, 2147483647, '67, Ram Nagar, Kanpur, India, 208001'),
('Pooja Tiwari', 1012, 1100998877, '89, Gandhi Road, Nagpur, India, 440001'),
('Alok Singhania', 1013, 1122334455, '56, Raja Park, Indore, India, 452001');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `seller`
--
ALTER TABLE `seller`
  ADD PRIMARY KEY (`sellerId`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
