<?php
//oblige l'utilisateur à etre logé pour acceder à cette page
session_start();
$nom=$_SESSION['login'];
if(!isset($_SESSION['login'])){
   header('Location:page_connection_backoffice.php');
   exit();
}
//-------------------------------------------------------------
require_once('connection_databases.php');

try{
$pdoExport = new PDO("mysql:host=$servername;dbname=$dbName;charset=utf8", $user, $pass, [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION]);
}catch(PDOExeption $erreur){
    echo $erreur->getMessage();
}
header("Content-Type: application/octet-stream");
header("Content-Transfer-Encoding: Binary");
header("Content-disposition: attachment; filename=\"Mail-list.csv\"");

$selectExport = ("SELECT  idNewsletter, email, date_sub FROM Mail");
$result = $pdoExport->prepare($selectExport);
$result->execute();
$fieldName =[
    "idNewsletter",
    "email",
    "date_sub",
    "\n",
];
echo implode(",",$fieldName);
while ($row = $result->fetch(PDO::FETCH_NAMED)) {
    echo implode(",", [
        $row['idNewsletter'], $row['email'], $row['date_sub']
    ]);
    echo "\r\n";
}
