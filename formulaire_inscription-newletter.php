<?php
	
$email = $_POST['email'] ;

$servername='';
$dbName='';
$user='';
$pass='';

if(!empty($_POST['email']&& filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)){
	
	try{
		$dbnl = new PDO("mysql:host=$servername;dbname=$dbName",$username,$password);
		$dbnl->setAttribute(PDO::ATTR_ERMODE, PDO::ERRMODE_EXCEPTION);
		$sql=$dbnl->prepare("INSERT INTO Newsletter(Mail) VALUES(:email);";)
		$sql->bindParam(':email', $_POST['email'],PDO::PARAM_STR);
		$sql->execute();	
	}
catch(PDOException $e){
	$dbnl->rollBack();
echo "Erreur :" . $e->getMessage();
		};
}
?>



<?php



