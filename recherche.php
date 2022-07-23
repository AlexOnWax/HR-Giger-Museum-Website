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



//permet de bannir les balises html dans l'input

//VAR_DUMP($recherche);
if(!empty($_POST['search']) && isset($_POST['search'])){
$recherche = htmlspecialchars($_POST['search']);

try{
$dbnl = new PDO('mysql:host='.$servername.';dbname='.$dbName, $user, $pass);
$dbnl->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
$sql=$dbnl->prepare("SELECT * FROM Mail WHERE email LIKE :recherche");
$sql->bindValue(':recherche','%'.$recherche.'%',PDO::PARAM_STR);//Ajoute securité précise le type de donné attendu
$sql->execute();	
$recherche = $sql->fetchAll((PDO::FETCH_ASSOC));
print json_encode($recherche);
}catch(PDOException $e){
    echo "Erreur :" . $e;
}
}

?>