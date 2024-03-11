<?php

    declare(strict_types=1);

    namespace App;

    use PDO;

    class Database {
        private $dbHost = 'localhost';
        private $dbUser = 'root'; // cambiar usuario
        private $dbPass = ''; // cambiar contraseña
        private $dbName = 'bdtaxtech';

        public function getConnection():PDO {
            $dsn = "mysql:host=$this->dbHost;dbname=$this->dbName;charset=utf8";
            $pdo = new PDO($dsn,$this->dbUser,$this->dbPass, [
                PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION
            ]);

            return $pdo;
        }
    }