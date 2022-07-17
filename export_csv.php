<?php
require __DIR__ .'/vendor/autoload.php';
$dotenv = Dotenv\Dotenv::createImmutable(__DIR__);
$dotenv->load();
$servername=$_ENV['servername'];
$dbName=$_ENV['dbName'];
$user=$_ENV['username'];
$pass=$_ENV['password'];
$pdoExport = new PDO('mysql:host='.$servername.';dbname='.$dbName, $user, $pass);
$selectExport = ("SELECT email, date_sub FROM Mail INTO OUTFILE 'Z:\var\www\html\Mail-list.csv'");
// a faire fonctionner l'export csv **********************
$result = $pdoExport->prepare($selectExport);
$result->execute();

?>