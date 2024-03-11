-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 11-03-2024 a las 16:37:15
-- Versión del servidor: 10.4.24-MariaDB
-- Versión de PHP: 8.0.19

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `bdtaxtech`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `clients`
--

CREATE TABLE `clients` (
  `id` int(11) NOT NULL,
  `dni` varchar(50) NOT NULL,
  `name` varchar(50) NOT NULL,
  `lastname` varchar(50) NOT NULL,
  `age` varchar(50) NOT NULL,
  `birthdate` varchar(50) NOT NULL,
  `status` tinyint(4) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `clients`
--

INSERT INTO `clients` (`id`, `dni`, `name`, `lastname`, `age`, `birthdate`, `status`) VALUES
(1, '11111111', 'test0_name', 'test_lastname_0', '24', '1999-12-15', 1),
(2, '22222222', 'test1_name', 'test1_lastname', '35', '1988-07-06', 1),
(3, '33333333', 'test2_name', 'test2_lastname', '25', '1998-12-16', 1),
(4, '44444444', 'test3_name', 'test3_lastname', '25', '1998-10-25', 1),
(5, '55555555', 'test4_name', 'test4_lastname', '25', '1998-10-25', 1),
(6, '66666666', 'test5_name', 'test5_lastname', '25', '1998-10-25', 1),
(7, '12334588', 'test6_name', 'test6_lastname', '24', '1999-10-25', 1),
(8, '71970903', 'test7_name', 'test7_lastname', '25', '1998-03-30', 1),
(9, '71970905', 'test8_name', 'test8_lastname', '27', '1997-05-11', 1),
(10, '12348888', 'test9_name', 'test9_lastname', '23', '1999-10-25', 1);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `clients`
--
ALTER TABLE `clients`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `clients`
--
ALTER TABLE `clients`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=54;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
