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
   $showMore = $_POST['value'];
};
try {
    $pdo = new PDO('mysql:host=' . $servername . ';dbname=' . $dbName, $user, $pass);
    $result = $pdo->prepare('SELECT * FROM Mail LIMIT 10 OFFSET :nbr');
    $resultTotal = $pdo->prepare('SELECT COUNT(email) FROM Mail');

    $result->bindParam(':nbr', $showMore, PDO::PARAM_INT);
    $result->execute();
    $resultTotal->execute();
}catch(PDOException $e){
    echo "Erreur :" . $e;
}
    $count = $result->rowCount();
    $countTotal = $resultTotal->fetchColumn();//recupère la valeur qui est dans la colonne resultant de la requete
    $fetch = $result->fetchAll((PDO::FETCH_ASSOC));

print json_encode($fetch);//on encode en Json
header('nbrTotal:'.$countTotal);
header('nbr:'.($count+$showMore));

//$result->debugDumpParams(); //DEBUG

