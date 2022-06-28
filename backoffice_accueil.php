<?php session_start();
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="css/styleBackoffice.css">
    <script src="validation_formulaire_backoffice.js" defer></script>
</head>
<body>
    <header>
        
    </header>
    <div class="flex_principal">
    <div class="main_container">
<div class="partie_gauche_accueil">
<h1>WELCOME</h1>

</div>
<div class="partie_droite_login">
    <form method="post" action="verification_connexion_dashboard.php" novalidate>
        <h2>HR.giger Museum</h2>
        <div class="flex_item_top">
            <p>Login</p>
            <input name="login" type="text" id="login" class="input" required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2, 3}$"  placeholder="Login">
            <div class="invisible"></div>
            <p>Password</p>
            <input name="mdp" type="password" class="input" id="Password" required  placeholder="Password">
            <div class="invisible"></div>
            </div>
            <button id="btn" type="submit" name="submit" href="dashboard_mailing_list.html">Sign In</button>
    </form>


</div>

    </div>
</div>
</body>
</html>