<?php
require __DIR__ .'/vendor/autoload.php';
$dotenv = Dotenv\Dotenv::createImmutable(__DIR__);
$dotenv->load();
$servername=$_ENV['servername'];
$dbName=$_ENV['dbName'];
$user=$_ENV['username'];
$pass=$_ENV['password'];
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



?>