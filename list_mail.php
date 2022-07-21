<?php
require __DIR__ .'/vendor/autoload.php';
$dotenv = Dotenv\Dotenv::createImmutable(__DIR__);
$dotenv->load();
$servername=$_ENV['servername'];
$dbName=$_ENV['dbName'];
$user=$_ENV['username'];
$pass=$_ENV['password'];
$showMore = $_GET['value'];

$pdo = new PDO('mysql:host='.$servername.';dbname='.$dbName, $user, $pass);
$result = $pdo->prepare('SELECT * FROM Mail LIMIT 10 OFFSET :nbr');
$result->bindParam(':nbr', $showMore, PDO::PARAM_INT );
$result->execute();
$fetch = $result->fetchAll((PDO::FETCH_ASSOC));
print json_encode($fetch);//on encode en Json
//$result->debugDumpParams(); //DEBUG
?>