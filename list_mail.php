<?php
                    require __DIR__ .'/vendor/autoload.php';
                    $dotenv = Dotenv\Dotenv::createImmutable(__DIR__);
                    $dotenv->load();
                    $servername=$_ENV['servername'];
                    $dbName=$_ENV['dbName'];
                    $user=$_ENV['username'];
                    $pass=$_ENV['password'];

            $pdo = new PDO('mysql:host='.$servername.';dbname='.$dbName, $user, $pass);
            $result = $pdo->prepare("SELECT email, date_sub FROM Mail");
            $result->execute();
            $fetch = $result->fetchAll((PDO::FETCH_ASSOC));
            print json_encode($fetch);
?>