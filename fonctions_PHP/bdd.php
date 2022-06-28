<?php
//fichier de connexion à la bdd : cnxbdd.php
require __DIR__ .'/vendor/autoload.php';
$dotenv = Dotenv\Dotenv::createImmutable(__DIR__);
$dotenv->load();

    $dbname= 'mabase';
    $user = 'root';
    $password = '';
    $host = 'localhost';

try {
    $bdd = new PDO('mysql:host='.$servername.';dbname='.$dbName, $user, $pass);
    $bdd->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    echo "<p>Erreur : " . $e->getMessage() . "</p>";
    exit();
}


?>