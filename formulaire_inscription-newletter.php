<?php

$texte = $_POST['email'] ;
echo $texte;


		

		$texte = $_POST['email'] ;
		echo $texte;
		$email = $_POST['email'] ;
		

		if (isset($_POST["email"])){
		if (empty($email)){
		    echo "Value missing";
		}else if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
		    echo "ok";
		
		try{
		$conn = new PDO("mysql:host=$servername;dbname=$dbName",$username,$password);
		$conn->setAttribute(PDO::ATTR_ERMODE, PDO::ERRMODE_EXCEPTION);
		

		 $conn = $sql->prepare("INSERT INTO 
		 Newsletter(Mail)
		 VALUES($email)");
		 $conn->execute();
		

		

		

		}
		

		

		

		

		}else{
		    echo "Pas le bon Format";
		}}
		

		

		

		

		

		catch(PDOException $e){
		    echo "Erreur :" . $e->getMessage();
		};
		

		

		

		




?>