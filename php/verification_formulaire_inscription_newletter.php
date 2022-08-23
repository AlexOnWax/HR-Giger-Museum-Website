<?php

require_once('connection_databases.php');

if(!empty($_POST['email']) && filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {
    $email = $_POST['email'];

    try {
        $dbnl = new PDO('mysql:host=' . $servername . ';dbname=' . $dbName, $user, $pass);
        $dbnl->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        $sql = $dbnl->prepare("INSERT INTO Mail(email) VALUES(:email)");
        $sql->bindParam(':email', $email, PDO::PARAM_STR);//Ajoute securité précise le type de donné attendu
        $sql->execute();
    } catch (PDOException $e) {
        //echo "Erreur :" . $e;
            header('error:' .$e->getCode());
echo json_encode($e->getCode());
    }

 

}else{// permet la redirection si on accede directement a la page depuis la barre d'adresse

    header("Location: index.html");

}

