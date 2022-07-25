<?php
session_start();
$nom=$_SESSION['login'];
if(!isset($_SESSION['login'])){
   header('Location:page_connection_backoffice.php');
   exit();
}
require __DIR__ .'/vendor/autoload.php';
$dotenv = Dotenv\Dotenv::createImmutable(__DIR__);
$dotenv->load();
$servername=$_ENV['servername'];
$dbName=$_ENV['dbName'];
$user=$_ENV['username'];
$pass=$_ENV['password'];
$count =$_GET['value'];


$pdoCount = new PDO('mysql:host='.$servername.';dbname='.$dbName, $user, $pass);
$resultTotal = $pdoCount->prepare('SELECT COUNT(email) FROM Mail');

$resultTotal->execute();

$countMail= $resultTotal->fetchAll((PDO::FETCH_COLUMN));
$nbr=$countMail[0];
settype($nbr,"integer");
print json_encode($nbr);
//commentaire test






?>