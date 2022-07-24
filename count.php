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


if (isset($_POST['value'])) {
    $show=$_POST['value'];
 };

$pdo = new PDO('mysql:host='.$servername.';dbname='.$dbName, $user, $pass);
$result = $pdo->prepare('SELECT * FROM Mail LIMIT 10 OFFSET :nbr');
$result->bindParam(':nbr', $show, PDO::PARAM_INT );
$result->execute();
$count = $result->rowCount();
header('nbr:'.($count+$show));


?>