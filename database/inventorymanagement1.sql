-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 22, 2024 at 01:25 PM
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
-- Database: `inventorymanagement1`
--

-- --------------------------------------------------------

--
-- Table structure for table `category`
--

CREATE TABLE `category` (
  `categoryId` int(11) NOT NULL,
  `categoryName` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `category`
--

INSERT INTO `category` (`categoryId`, `categoryName`) VALUES
(101, 'Electronics'),
(102, 'Clothing & Apparel'),
(103, 'Home & Garden'),
(104, 'Health & Beauty'),
(105, 'Sports & Outdoors'),
(106, 'Automotive'),
(107, 'Toys & Games'),
(108, 'Books & Media'),
(109, 'Food & Beverage'),
(110, 'Office Supplies'),
(111, 'Pet Supplies'),
(112, 'Jewelry & Accessorie'),
(113, 'Baby & Kids'),
(114, 'Tools & Hardware'),
(115, 'Arts & Crafts');

-- --------------------------------------------------------

--
-- Table structure for table `customer`
--

CREATE TABLE `customer` (
  `customerId` int(11) NOT NULL,
  `customerName` varchar(20) DEFAULT NULL,
  `phone` int(11) DEFAULT NULL,
  `address` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `customer`
--

INSERT INTO `customer` (`customerId`, `customerName`, `phone`, `address`) VALUES
(3001, 'Rahul Sharma', 2147483647, '21, Civil Lines, Delhi, India, 110001'),
(3002, 'Amita Patel', 2147483647, '45, Malabar Hill, Mumbai, India, 400001'),
(3003, 'Neha Singh', 2147483647, '78, Koregaon Park, Pune, India, 411001'),
(3004, 'Rajesh Gupta', 2147483647, '90, Bani Park, Jaipur, India, 302001'),
(3005, 'Priya Verma', 2147483647, '123, Bodakdev, Ahmedabad, India, 380001'),
(3006, 'Anjali Reddy', 2147483647, '45, Gomti Nagar, Lucknow, India, 226001'),
(3007, 'Sachin Desai', 2147483647, '67, Govind Nagar, Kanpur, India, 208001'),
(3008, 'Rohit Kapoor', 2147483647, '89, Sadar, Nagpur, India, 440001'),
(3009, 'Pooja Singh', 2147483647, '56, Vijay Nagar, Indore, India, 452001'),
(3010, 'Sneha Sharma', 2147483647, '123, MG Road, Bangalore, India, 560001'),
(3011, 'fgh', 852963741, 'davangere');

-- --------------------------------------------------------

--
-- Table structure for table `distributer`
--

CREATE TABLE `distributer` (
  `distributerId` int(11) NOT NULL,
  `distributerName` varchar(20) DEFAULT NULL,
  `phone` int(11) DEFAULT NULL,
  `address` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `distributer`
--

INSERT INTO `distributer` (`distributerId`, `distributerName`, `phone`, `address`) VALUES
(2001, 'Akshay Kumar', 2147483647, '12, Ashok Nagar, Bangalore, Karnataka, 560001'),
(2002, 'Priya Singh', 2147483647, '34, Gandhi Road, Mumbai, Maharashtra, 400001'),
(2003, 'Deepak Sharma', 2147483647, '56, Nehru Colony, Hyderabad, Telangana, 500001'),
(2004, 'Neha Patel', 2147483647, '78, Gandhi Nagar, Pune, Maharashtra, 411001'),
(2005, 'Rajesh Gupta', 2147483647, '90, Mahatma Road, Jaipur, Rajasthan, 302001'),
(2006, 'Ananya Mishra', 2147483647, '123, Patel Chowk, Ahmedabad, Gujarat, 380001'),
(2007, 'Sanjay Verma', 2147483647, '45, Rajaji Nagar, Lucknow, Uttar Pradesh, 226001'),
(2008, 'Pooja Desai', 2147483647, '67, Ram Nagar, Kanpur, Uttar Pradesh, 208001'),
(2009, 'Ravi Kapoor', 2147483647, '89, Gandhi Road, Nagpur, Maharashtra, 440001'),
(2010, 'Sunita Reddy', 2147483647, '56, Raja Park, Indore, Madhya Pradesh, 452001'),
(2011, 'abc', 852963741, 'haveri');

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `orderId` int(11) NOT NULL,
  `productId` int(11) DEFAULT NULL,
  `customerId` int(11) DEFAULT NULL,
  `purchaseDate` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`orderId`, `productId`, `customerId`, `purchaseDate`) VALUES
(5001, 4001, 3001, '2024-02-17'),
(5002, 4005, 3002, '2024-02-17'),
(5003, 4010, 3003, '2024-02-17'),
(5004, 4007, 3004, '2024-02-17'),
(5005, 4009, 3005, '2024-02-17'),
(5006, 4016, 3006, '2024-02-17'),
(5007, 4018, 3007, '2024-02-17'),
(5008, 4020, 3008, '2024-02-17'),
(5009, 4022, 3009, '2024-02-17'),
(5010, 4026, 3010, '2024-02-17'),
(5011, 4003, 3001, '2024-02-01'),
(5012, 4006, 3002, '2024-02-02'),
(5013, 4011, 3003, '2024-02-03'),
(5014, 4008, 3004, '2024-02-04'),
(5015, 4015, 3005, '2024-02-05'),
(5016, 4019, 3006, '2024-02-06'),
(5017, 4012, 3007, '2024-02-07'),
(5018, 4021, 3008, '2024-02-08'),
(5019, 4023, 3009, '2024-02-09'),
(5020, 4027, 3010, '2024-02-10'),
(5021, 4024, 3001, '2024-02-11'),
(5022, 4004, 3002, '2024-02-12'),
(5023, 4013, 3003, '2024-02-13'),
(5024, 4025, 3004, '2024-02-14'),
(5025, 4029, 3005, '2024-02-15'),
(5026, 4028, 3006, '2024-02-16'),
(5027, 4002, 3007, '2024-02-17'),
(5028, 4030, 3008, '2024-02-18'),
(5029, 4014, 3009, '2024-02-19'),
(5030, 4009, 3010, '2024-02-20'),
(5031, 4001, 3001, '2024-02-21'),
(5032, 4005, 3002, '2024-02-22'),
(5033, 4010, 3003, '2024-02-23'),
(5034, 4007, 3004, '2024-02-24'),
(5035, 4009, 3005, '2024-02-25'),
(5036, 4016, 3006, '2024-02-26'),
(5037, 4018, 3007, '2024-02-27'),
(5038, 4020, 3008, '2024-02-28'),
(5039, 4022, 3009, '2024-02-29'),
(5040, 4026, 3010, '2024-03-01'),
(5041, 4030, 3011, '2024-02-23');

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `productId` int(11) NOT NULL,
  `productName` varchar(50) DEFAULT NULL,
  `categoryId` int(11) DEFAULT NULL,
  `sellerId` int(11) DEFAULT NULL,
  `distributerId` int(11) DEFAULT NULL,
  `description` varchar(200) DEFAULT NULL,
  `noOfProducts` int(11) DEFAULT NULL,
  `price` float DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`productId`, `productName`, `categoryId`, `sellerId`, `distributerId`, `description`, `noOfProducts`, `price`) VALUES
(4001, 'Smartphone', 101, 1001, 2001, 'Latest model with advanced features', 100, 500),
(4002, 'Laptop', 101, 1001, 2002, 'High-performance laptop for professional use', 50, 1000),
(4003, 'LED TV', 101, 1002, 2003, 'Ultra HD TV with smart features', 30, 800),
(4004, 'T-Shirt', 102, 1003, 2004, 'Cotton T-shirt for everyday wear', 200, 20),
(4005, 'Jeans', 102, 1004, 2005, 'Slim-fit jeans made from premium denim', 150, 30),
(4006, 'Sofa Set', 103, 1005, 2006, 'Luxurious sofa set for living room', 20, 1000),
(4007, 'Dining Table', 103, 1006, 2007, 'Wooden dining table with 6 chairs', 15, 600),
(4008, 'Shampoo', 104, 1007, 2008, 'Moisturizing shampoo for all hair types', 300, 10),
(4009, 'Face Cream', 104, 1008, 2009, 'Anti-aging face cream with SPF protection', 200, 25),
(4010, 'Football', 105, 1009, 2010, 'Official size and weight football', 50, 15),
(4011, 'Cricket Bat', 105, 1010, 2001, 'Professional-grade cricket bat made from English willow', 30, 50),
(4012, 'Car Tyres', 106, 1001, 2002, 'Set of 4 durable tyres for cars', 100, 80),
(4013, 'Motorcycle Helmet', 106, 1002, 2003, 'Safety-certified helmet for motorcycle riders', 150, 50),
(4014, 'Board Game', 107, 1003, 2004, 'Family-friendly board game for all ages', 100, 20),
(4015, 'Puzzle', 107, 1004, 2005, '1000-piece jigsaw puzzle for leisure time', 50, 10),
(4016, 'Novel', 108, 1005, 2006, 'Bestselling novel by renowned author', 50, 15),
(4017, 'Cookbook', 108, 1006, 2007, 'Collection of delicious recipes for home cooks', 30, 20),
(4018, 'Rice', 109, 1007, 2008, 'Premium quality basmati rice', 500, 5),
(4019, 'Coffee', 109, 1008, 2009, 'Arabica coffee beans for rich flavor', 200, 10),
(4020, 'Printer', 110, 1009, 2010, 'All-in-one printer for home and office use', 20, 200),
(4021, 'Laptop Bag', 110, 1010, 2001, 'Stylish and durable bag for laptops', 100, 30),
(4022, 'Pet Food', 111, 1001, 2002, 'Nutritious food for dogs and cats', 200, 15),
(4023, 'Pet Toys', 111, 1002, 2003, 'Interactive toys to keep pets entertained', 100, 10),
(4024, 'Earrings', 112, 1003, 2004, 'Fashionable earrings for women', 150, 20),
(4025, 'Necklace', 112, 1004, 2005, 'Statement necklace for special occasions', 100, 40),
(4026, 'Baby Clothes', 113, 1005, 2006, 'Soft and comfortable clothes for infants', 300, 15),
(4027, 'Baby Toys', 113, 1006, 2007, 'Educational toys for babies', 200, 10),
(4028, 'Power Drill', 114, 1007, 2008, 'Cordless drill for home DIY projects', 50, 50),
(4029, 'Toolbox', 114, 1008, 2009, 'Portable toolbox for organizing tools', 30, 40),
(4030, 'Paint Set', 115, 1009, 2010, 'Artist-quality paints for painting enthusiasts', 50, 30),
(4032, 'hello1', 114, 1012, 2011, 'hello1', 20, 500);

-- --------------------------------------------------------

--
-- Table structure for table `seller`
--

CREATE TABLE `seller` (
  `sellerId` int(11) NOT NULL,
  `sellerName` varchar(20) DEFAULT NULL,
  `phone` int(11) DEFAULT NULL,
  `address` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `seller`
--

INSERT INTO `seller` (`sellerId`, `sellerName`, `phone`, `address`) VALUES
(1001, 'Ramesh Sharma', 2147483647, '45, Krishna Nagar, Delhi, India, 110001'),
(1002, 'Priya Patel', 2147483647, '102, Gandhi Road, Mumbai, India, 400001'),
(1003, 'Amit Singh', 2147483647, '23, Raja Bazar, Kolkata, India, 700001'),
(1004, 'Vikram Patel', 2147483647, '12, Ashok Nagar, Bangalore, India, 560001'),
(1005, 'Anjali Gupta', 2147483647, '34, Ramnagar, Chennai, India, 600001'),
(1006, 'Rahul Verma', 2147483647, '56, Nehru Colony, Hyderabad, India, 500001'),
(1007, 'Neha Singh', 2147483647, '78, Gandhi Nagar, Pune, India, 411001'),
(1008, 'Priyanka Sharma', 2147483647, '90, Mahatma Road, Jaipur, India, 302001'),
(1009, 'Deepak Kumar', 2147483647, '123, Patel Chowk, Ahmedabad, India, 380001'),
(1010, 'Sunita Yadav', 2147483647, '45, Rajaji Nagar, Lucknow, India, 226001'),
(1011, 'Sanjay Mishra', 2147483647, '67, Ram Nagar, Kanpur, India, 208001'),
(1012, 'Pooja Tiwari', 1100998877, '89, Gandhi Road, Nagpur, India, 440001'),
(1013, 'Alok Singhania', 1122334455, '56, Raja Park, Indore, India, 452001'),
(1014, 'xyz', 2147483647, 'rannebenur');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`categoryId`);

--
-- Indexes for table `customer`
--
ALTER TABLE `customer`
  ADD PRIMARY KEY (`customerId`);

--
-- Indexes for table `distributer`
--
ALTER TABLE `distributer`
  ADD PRIMARY KEY (`distributerId`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`orderId`),
  ADD KEY `productId` (`productId`),
  ADD KEY `customerId` (`customerId`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`productId`),
  ADD KEY `categoryId` (`categoryId`),
  ADD KEY `sellerId` (`sellerId`),
  ADD KEY `distributerId` (`distributerId`);

--
-- Indexes for table `seller`
--
ALTER TABLE `seller`
  ADD PRIMARY KEY (`sellerId`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `orders_ibfk_1` FOREIGN KEY (`productId`) REFERENCES `products` (`productId`) ON DELETE CASCADE,
  ADD CONSTRAINT `orders_ibfk_2` FOREIGN KEY (`customerId`) REFERENCES `customer` (`customerId`);

--
-- Constraints for table `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `products_ibfk_1` FOREIGN KEY (`categoryId`) REFERENCES `category` (`categoryId`) ON DELETE CASCADE,
  ADD CONSTRAINT `products_ibfk_2` FOREIGN KEY (`sellerId`) REFERENCES `seller` (`sellerId`) ON DELETE CASCADE,
  ADD CONSTRAINT `products_ibfk_3` FOREIGN KEY (`distributerId`) REFERENCES `distributer` (`distributerId`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
