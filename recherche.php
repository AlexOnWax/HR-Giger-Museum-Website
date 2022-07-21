<?php

require __DIR__ .'/vendor/autoload.php';
$dotenv = Dotenv\Dotenv::createImmutable(__DIR__);
$dotenv->load();

$servername=$_ENV['servername'];
$dbName=$_ENV['dbName'];
$user=$_ENV['username'];
$pass=$_ENV['password'];
$recherche = $_POST['search'];
echo json_encode($recherche);
VAR_DUMP($recherche);

// $dbnl = new PDO('mysql:host='.$servername.';dbname='.$dbName, $user, $pass);
// $dbnl->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
// $sql=$dbnl->prepare("INSERT INTO Mail(email) VALUES(:email)");
// $sql->bindParam(':email', $_POST['email'],PDO::PARAM_STR);//Ajoute securité précise le type de donné attendu
// $sql->execute();	
	


?>