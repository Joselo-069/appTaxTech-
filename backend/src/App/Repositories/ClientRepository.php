<?php

declare(strict_types= 1);

namespace App\Repositories;
use App\Database;
use PDO;

Class ClientRepository {

    private $database;

    public function __construct() {
        $this->database = new Database();
    }

    public function getAll() : array {
        $pdo = $this->database->getConnection();
        $query = $pdo->query("SELECT * FROM clients WHERE status = 1");

        return $query->fetchAll(PDO::FETCH_ASSOC);
    }

    public function getById(int $dni) : array|bool {
        $pdo = $this->database->getConnection();
        $stmt = $pdo->prepare("SELECT * FROM clients WHERE status = 1 AND dni = ?");
        $stmt->execute([$dni]);

        return $stmt->fetch(PDO::FETCH_ASSOC);
    }

    public function create(string $dni, string $name, string $lastname, string $age, string $birthdate ) : array|bool {
        $pdo = $this->database->getConnection();
        $stmt = $pdo->prepare("INSERT INTO clients (dni, name, lastname, age, birthdate, status) VALUES (?, ?, ?, ?, ?, 1)");
        $stmt->execute([$dni, $name, $lastname, $age, $birthdate]);

        return $this->getById((int) $dni);
    }

    public function update(string $dni, string $name, string $lastname, string $age, string $birthdate ) : array|bool {
        $pdo = $this->database->getConnection();
        $stmt = $pdo->prepare("UPDATE clients SET dni=?, name=?, lastname=?, age=?, birthdate=? WHERE dni=?");
        $stmt->execute([$dni, $name, $lastname, $age, $birthdate, $dni]);

        return $this->getById((int) $dni);
    }

    public function delete(string $dni) : int {
        $pdo = $this->database->getConnection();
        $stmt = $pdo->prepare("UPDATE clients SET status=0 WHERE dni=?");
        $stmt->execute([$dni]);

        return $stmt->rowCount();
    }
}