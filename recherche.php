<?php
session_start();
$nom=$_SESSION['login'];
if(!isset($_SESSION['login'])){
   header('Location:page_connection_backoffice.php');
   exit();
}



require_once('connection_databases.php');



//permet de bannir les balises html dans l'input

//VAR_DUMP($recherche);
if(!empty($_POST['search']) && isset($_POST['search'])){
$recherche = htmlspecialchars($_POST['search']);

try{
$dbnl = new PDO('mysql:host='.$servername.';dbname='.$dbName, $user, $pass);
$dbnl->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $sql=$dbnl->prepare("SELECT idNewsletter,email,date_sub FROM Mail WHERE email LIKE :recherche");
$sql->bindValue(':recherche','%'.$recherche.'%',PDO::PARAM_STR);//Ajoute securité précise le type de donné attendu
$sql->execute();	
$recherche = $sql->fetchAll(PDO::FETCH_ASSOC);//creer un tableau associatif
print json_encode($recherche);
}catch(PDOException $e){
    echo "Erreur :" . $e;
}
}

