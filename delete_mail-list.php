<?php

require __DIR__ .'/vendor/autoload.php';
$dotenv = Dotenv\Dotenv::createImmutable(__DIR__);
$dotenv->load();
$servername=$_ENV['servername'];
$dbName=$_ENV['dbName'];
$user=$_ENV['username'];
$pass=$_ENV['password'];
$dbnl = new PDO('mysql:host='.$servername.';dbname='.$dbName, $user, $pass);
$sql="DELETE FROM Mail WHERE email="alexandre.barbet@gmail.com"";
$conn = $dbnl->query($sql);
?>