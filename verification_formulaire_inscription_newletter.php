<?php

	require __DIR__ .'/vendor/autoload.php';
	$dotenv = Dotenv\Dotenv::createImmutable(__DIR__);
	$dotenv->load();

$servername=$_ENV['servername'];
$dbName=$_ENV['dbName'];
$user=$_ENV['username'];
$pass=$_ENV['password'];



if(!empty($_POST['email']) && filter_var($_POST['email'], FILTER_VALIDATE_EMAIL) == true){
	$email = $_POST['email'];

	try{
		$dbnl = new PDO('mysql:host='.$servername.';dbname='.$dbName, $user, $pass);
		$dbnl->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
		$sql=$dbnl->prepare("INSERT INTO Mail(email) VALUES(:email)");
		$sql->bindParam(':email', $_POST['email'],PDO::PARAM_STR);//Ajoute securité précise le type de donné attendu
		$sql->execute();	
	}
catch(PDOException $e){
	
echo "Erreur :" . $e;
		}
$dbnl=null;
}else{
	header("Location: index.html"); // permet la redirection si on accede directement a la page depuis la bare d'adresse

}
?>






