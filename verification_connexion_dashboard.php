<?php
session_start();
var_dump($_POST);
require __DIR__ .'/vendor/autoload.php';
$dotenv = Dotenv\Dotenv::createImmutable(__DIR__);
$dotenv->load();

$servername=$_ENV['servername'];
$dbName=$_ENV['dbName'];
$user=$_ENV['username'];
$pass=$_ENV['password'];

if (isset($_POST['login']) && isset($_POST['mdp'])){
$login=$_POST['login'];
$passAdmin=$_POST['mdp'];

$pdo = new PDO('mysql:host='.$servername.';dbname='.$dbName, $user, $pass);
try{
$result = $pdo->prepare('SELECT * FROM Users WHERE Login= :login ');
$result->bindParam(':login', $login);
$result->execute();

}catch(Exception $e){
	echo "<p>Erreur : " . $e->getMessage() . "</p>";
	exit();
  }
$then = $result->fetch(PDO::FETCH_ASSOC);

if(count($then) > 0 ){
	$_SESSION['login'] = $then['login'];
	echo 'ok';
	exit();
}else{
echo 'Vérifiez vos identifiants de connexion<br>';
}

}


require 'fonctions_PHP/auth.php';
if (is_connected()){
	
	exit();
}


?>