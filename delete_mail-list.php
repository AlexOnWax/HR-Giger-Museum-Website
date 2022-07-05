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
$idToSuppr = $_GET['idToSuppr'];
$orderBt =$_GET['orderBy'];

$pdoMailSuppr = new PDO('mysql:host='.$servername.';dbname='.$dbName, $user, $pass);
$result = $pdoMailSuppr->prepare('DELETE FROM Mail WHERE idNewsletter= :id');
$result->bindParam(':id', $idToSuppr ); 
$result->execute();

?>