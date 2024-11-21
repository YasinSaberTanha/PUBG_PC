<?php

header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Methode: GET , POST , PUT , DELETE");
header("Access-Control-Allow-Headers: Content-Type");

function dd($var)
{
    echo "<hr>";
    echo "<pre>";
    var_dump($var);
    echo "<hr>";
    exit;
}


function PDO()
{
    try {
        $option = [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION, PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_OBJ];
        $pdo = new PDO("mysql:host=localhost;dbname=pubg", "root", "", $option);
        return $pdo;
    } catch (PDOException $e) {
        echo "Connection failed: " . $e->getMessage();
    }
}


function API($query, $value = [])
{
    $pdo = PDO();
    try {
        if (boolval($value)) {
            $stmt = $pdo->prepare($query);
            $stmt->execute($value);

            return $stmt->fetchAll();
        } else {
            $stmt = $pdo->prepare($query);
            $stmt->execute();

            return $stmt->fetchAll();
        }
    } catch (PDOException $e) {
        echo $e;
    }
}
