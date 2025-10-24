-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 24, 2025 at 05:33 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `apex_automotive`
--

-- --------------------------------------------------------

--
-- Table structure for table `admins`
--

CREATE TABLE `admins` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `created_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `admins`
--

INSERT INTO `admins` (`id`, `name`, `email`, `password`, `created_at`) VALUES
(1, 'Udula', 'udula@gmail.com', '$2b$10$kq6BOCHV0FTB.VzVLiXdROMcFVg3COyE6msY5SHjh1KMVKqDr80vy', '2025-09-30 05:02:08');

-- --------------------------------------------------------

--
-- Table structure for table `brands`
--

CREATE TABLE `brands` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `brands`
--

INSERT INTO `brands` (`id`, `name`, `createdAt`) VALUES
(1, 'Rolls Royce', '2025-10-14 06:14:38'),
(2, 'Bentley', '2025-10-14 06:19:46'),
(3, 'BMW', '2025-10-14 06:19:52'),
(4, 'Mercedes Benz', '2025-10-14 06:20:21'),
(5, 'Audi', '2025-10-14 06:23:10'),
(6, 'Dodge', '2025-10-14 06:24:34'),
(7, 'Porsche', '2025-10-14 06:24:45'),
(8, 'Land Rover', '2025-10-14 06:25:11'),
(9, 'Jeep', '2025-10-14 06:26:09'),
(10, 'Chevrolet', '2025-10-14 06:26:25'),
(11, 'Ford', '2025-10-14 06:27:13'),
(12, 'Toyota', '2025-10-14 06:30:45'),
(13, 'Honda', '2025-10-14 06:32:16'),
(14, 'BYD', '2025-10-14 06:32:30'),
(15, 'Tesla', '2025-10-17 10:10:25'),
(16, 'Lexus', '2025-10-21 03:46:47'),
(17, 'Volkswagen', '2025-10-21 05:33:08'),
(18, 'Volvo', '2025-10-21 06:57:34'),
(19, 'Genesis', '2025-10-21 06:57:58'),
(20, 'INFINITI', '2025-10-22 05:46:02');

-- --------------------------------------------------------

--
-- Table structure for table `vehicles`
--

CREATE TABLE `vehicles` (
  `id` int(11) NOT NULL,
  `brand` varchar(255) NOT NULL,
  `model` varchar(255) NOT NULL,
  `year` int(11) NOT NULL,
  `price` float NOT NULL,
  `engineCapacity` float NOT NULL,
  `vehicleType` enum('Sedan','SUV','Hatchback','Coupe','Convertible','Pickup','Muscle','Crossover','Sports Car') NOT NULL,
  `fuelType` enum('Petrol','Diesel','Hybrid','Electric') NOT NULL,
  `transmissionType` varchar(255) NOT NULL,
  `mileage` float NOT NULL,
  `origin` varchar(255) NOT NULL,
  `color` varchar(255) NOT NULL,
  `description` text DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `vehicles`
--

INSERT INTO `vehicles` (`id`, `brand`, `model`, `year`, `price`, `engineCapacity`, `vehicleType`, `fuelType`, `transmissionType`, `mileage`, `origin`, `color`, `description`, `image`, `created_at`) VALUES
(1, 'BMW', '520d', 2025, 58200, 1995, 'Sedan', 'Diesel', '8-Speed Automatic', 6, 'Germany', 'Garnish Red', 'A premium midsize sedan offering a blend of efficiency, luxury, and advanced technology.', 'bmw 520d.jpg', '2025-10-01 03:23:08'),
(2, 'Rolls Royce', 'Phantom EWB', 2025, 585750, 6749, 'Sedan', 'Diesel', '8-Speed Automatic', 14, 'Germany', 'Sky Blue Light Gold', 'A premium midsize sedan offering a blend of efficiency, luxury, and advanced technology.', 'RR Ghost BE.jpg', '2025-10-01 03:23:08'),
(3, 'Mercedes Benz', 'E350e', 2025, 63600, 2500, 'Sedan', 'Petrol', '8 Speed Automatic', 0, 'Germen', 'White ', 'Luxury plug-in hybrid sedan combining a 2.0L turbocharged engine with an electric motor, delivering strong performance, refined comfort, advanced tech features, and improved efficiency with electric-only driving capability.', 'Benz E350e.png', '2025-10-01 06:57:03'),
(4, 'Porsche', '911 Turbo S', 2025, 230400, 3800, 'Sports Car', 'Petrol', '8-speed PDK', 0, 'Germany', 'Yellow', 'High-performance sports car featuring a 3.8-liter twin-turbocharged flat-six engine producing 640 horsepower and 590 lb-ft of torque.', 'Porsche 911.png', '2025-10-01 08:10:29'),
(5, 'Chevrolet', 'Camaro ZL1 ', 2025, 81995, 6162, 'Muscle', 'Petrol', '10-speed automatic', 0, 'American', 'Sappier Blue', 'High-performance muscle car with a 650-hp supercharged 6.2L V8, manual or 10-speed auto, aggressive styling, and track-ready features, making it the ultimate Camaro of its generation.', 'Chevrolet Camaro.jpg', '2025-10-01 08:10:29'),
(6, 'Jeep', 'Wrangler Rubicon Unlimited', 2025, 75000, 3604, 'SUV', 'Petrol', '8-speed automatic', 0, 'American', 'Yellowish Green', 'Rugged 4-door off-road SUV with V6 power, solid 4×4 hardware, choice of manual or auto, built for trails but usable daily.', 'Jeep Wrangler.jpg', '2025-10-01 09:49:02'),
(7, 'Dodge', 'Challenger SRT Hellcat', 2023, 135880, 6200, 'Muscle', 'Petrol', '8-speed automatic', 0, 'American', 'Diamond White', 'A muscle-car powerhouse: supercharged 6.2 L V8 delivering ~ 797 hp, widebody stance, Jailbreak custom options package, built for straight-line brute force with aggressive styling. ', 'Dodge Challenger.jpg', '2025-10-01 09:57:05'),
(8, 'Bentley', 'Flying Spur Mulliner', 2025, 298250, 3996, 'Sedan', 'Petrol', '8-speed automatic', 0, 'United Kingdom', 'Light Gold & Pale Bronze', 'Ultra-luxury sedan with a 4.0L twin-turbo V8 hybrid engine delivering 771 hp and 1,000 Nm torque, combining performance with opulence.', 'Bentley Flying.jpg', '2025-10-01 10:06:59'),
(9, 'Land Rover', 'Range Rover SV Autobiography', 2025, 213200, 4400, 'SUV', 'Petrol', '8-speed automatic', 0, 'United Kingdom', 'Dark Greenish-Blue', 'Flagship luxury SUV with a powerful V8 engine, advanced technology, and bespoke craftsmanship', 'Range Rover SV.jpg', '2025-10-01 10:06:59'),
(10, 'Ford', 'Mustang GT Convertible', 2025, 45040, 2260, 'Convertible', 'Petrol', '10-speed automatic', 0, 'American', 'White & Black', 'A stylish and powerful convertible sports car offering a turbocharged engine, advanced technology, and open-air driving experience.', 'Ford Mustang.jpg', '2025-10-01 10:06:59'),
(11, 'Toyota', 'Century', 2025, 220000, 3456, 'SUV', 'Petrol', 'Automatic', 0, 'Japan', 'Black & Ash', 'Ultra-luxury flagship combining hybrid power, advanced comfort, and Japanese craftsmanship in sedan and SUV forms', 'Toyota Century.jpg', '2025-10-02 03:01:08'),
(12, 'BMW', 'i7', 2025, 58200, 1995, 'Sedan', 'Electric', '8-Speed Automatic', 20, 'Germany', 'Mineral White', 'A premium midsize sedan offering a blend of efficiency, luxury, and advanced technology.', 'BMW i7.jpg', '2025-10-01 03:23:08'),
(13, 'Honda', 'NSX', 2025, 185000, 3493, 'Sports Car', 'Hybrid', 'Automatic', 0, 'USA', 'Red', 'A high-performance hybrid supercar combining a twin turbo 3.5 L V6 + electric motors, all-wheel drive, sharp styling and modern tech built in the USA aimed at delivering supercar punch with improved efficiency and drivability.', 'Honda nsx.jpg', '2025-10-02 03:01:08'),
(14, 'Mercedes Benz', 'S-Class', 2023, 118900, 2998, 'Coupe', 'Petrol', '9-speed automatic', 0, 'Germany', 'Black Metallic', 'Flagship luxury sedan combining advanced comfort, safety, and cutting-edge technology. The 2025 model features a sleek design, premium interior, driver assistance, mild hybrid system, and strong performance.', 'Benz S-Class.jpg', '2025-10-14 06:50:58'),
(15, 'Ford', 'F - 150 Raptor', 2025, 78440, 3500, 'Pickup', 'Petrol', '10-speed automatic', 0, 'USA', 'Dark Grey', 'A high-performance off-road version of the F-150 truck, with upgraded suspension, wider body, aggressive styling, and powerful engine options.', 'Ford Raptor.jpg', '2025-10-17 10:13:53'),
(16, 'BMW', '118i', 2025, 54380, 1500, 'Hatchback', 'Petrol', '7-speed automatic', 0, 'Germany', 'Diamond White', 'A compact premium hatch combining sporty styling, good build quality, modern infotainment / driver assists. Offers a range from efficient small engines to high-performance variants.', 'BMW 1.jpg', '2025-10-16 10:13:53'),
(17, 'Audi', 'Q5', 2025, 46495, 2000, 'Crossover', 'Petrol', '7-speed automatic', 0, 'Germany', ' Premium Red', 'A premium Crossover offering a mix of comfort, quality interiors, modern tech, optional AWD (quattro), and a choice of efficient or higher performance powertrains. Good daily usability plus luxury features.', 'Audi Q5.jpg', '2025-10-17 10:29:17'),
(18, 'Lexus', 'LX600', 2025, 106850, 3400, 'SUV', 'Petrol', '10-speed automatic', 0, 'Japan', 'Diamond Dark Brown', 'A full-size luxury SUV combining high-end comfort and off-road capability, featuring a twin-turbo V6, full-time 4WD, and upscale cabin amenities.', 'lexus lX600.jpg', '2025-10-01 03:01:08'),
(19, 'Volkswagen', 'Golf GTI', 2025, 33750, 2000, 'Hatchback', 'Petrol', '7 speed dual-clutch automatic', 0, 'Germany.', 'Red Metallic', 'A sporty compact hatchback blending everyday usability with performance — turbo-charged engine, sharp handling, hot-hatch flair wrapped in a practical VW package.', 'Volkswagen Golf GTI.jpg', '2025-10-01 03:01:08'),
(20, 'Tesla', 'Model 3', 2025, 44130, 0, 'Sedan', 'Electric', 'Single‐speed automatic', 0, 'USA', 'Light Maroon', 'A modern electric sedan combining strong performance, long driving range, advanced technology (including Tesla’s Autopilot/driver-assist features), and minimalist interior design.', 'Tesla Model 3.jpg', '2025-10-21 06:00:29'),
(21, 'BYD', 'Shark 6', 2025, 37565, 1497, 'Pickup', 'Hybrid', 'Single-speed reduction gear', 0, 'China', 'Metallic Blue', 'A technologically advanced plug-in hybrid midsize pickup combining strong electric and petrol power for performance (0-100 km/h in ~5.7 s), serious towing capacity (~2,500 kg braked), and modern utility & off-road capability.', 'BYD Shark 6.jpg', '2025-10-21 06:06:08'),
(22, 'Genesis', 'GV80 Coupe', 2025, 79950, 3470, 'Coupe', 'Petrol', '8-speed automatic', 0, 'South Korea', 'Diamond Orange', 'A premium luxury coupe-SUV combining sporty design (sloping roofline) with high-performance drive train, refined cabin with tech-rich interior and all-wheel drive capability.', 'Genesis GV80.jpg', '2025-10-22 03:43:05'),
(23, 'Volvo', 'CX90', 2025, 64645, 1969, 'SUV', 'Hybrid', '8-speed automatic', 0, 'Sweden', 'White', 'A premium 7-seater SUV combining Scandinavian luxury design, advanced safety and driver-assist technologies, and a choice of efficient petrol/mild-hybrid or plug-in hybrid powertrains — ideal for families who want high comfort and premium branding.', 'Volvo XC90.jpg', '2025-10-22 05:26:26'),
(24, 'INFINITI', 'QX80 Autograph', 2025, 109900, 3500, 'SUV', 'Petrol', '9-speed automatic', 0, 'Japan', 'Metallic Ash', 'A flagship luxury SUV offering bold styling, high-end materials, powerful twin-turbo V6 performance, seating for up to seven, and advanced technology and driver-assist features in its top Autograph trim.', 'Infiniti QX8.jpg', '2025-10-22 05:50:17');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admins`
--
ALTER TABLE `admins`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Indexes for table `brands`
--
ALTER TABLE `brands`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indexes for table `vehicles`
--
ALTER TABLE `vehicles`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admins`
--
ALTER TABLE `admins`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `brands`
--
ALTER TABLE `brands`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `vehicles`
--
ALTER TABLE `vehicles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
