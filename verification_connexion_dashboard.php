<?php
session_start();
require_once('connection_databases.php');

if (isset($_POST['login']) && isset($_POST['mdp']) && !empty($_POST['login']) && !empty($_POST['mdp'])){
$login=$_POST['login'];
$passAdmin=$_POST['mdp'];
	try{
	$pdo = new PDO('mysql:host='.$servername.';dbname='.$dbName, $user, $pass);
	$result = $pdo->prepare('SELECT login FROM Users WHERE Login= :login AND Password= :password');
	$result->bindParam(':login', $login);
	$result->bindParam(':password', $passAdmin);
	$result->execute();
		if($result->rowCount() == 1 ){//si la requete correspond a au moin une ligne du tableau 
			$_SESSION['login'] = $login;
			//$then = $result->fetch(PDO::FETCH_ASSOC);
            $response=array("response"=>"connecte",$bool=true);
			echo json_encode($response);
		}else{
			$response=array("response"=>"Non connecte",$bool=false);
			echo json_encode($response);
		}
	}
		catch(Exception $e){
			echo "<p>Erreur : " . $e->getMessage() . "</p>";
			exit();
  		}
}else{
	$response=array("response"=>"Vide",$bool=false);
	echo json_encode($response);
	 header("Location: page_connection_backoffice.php"); // permet la redirection si on accede directement a la page depuis la bare d'adresse
}
?>