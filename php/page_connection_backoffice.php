
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Connexion to the dashboard" />
    <title>Document</title>
    <link rel="stylesheet" href="../css/style_connection_backoffice.css">
    <script src="../JS/script_connection_dashboard_ajax.js" defer></script>
    <link rel="icon" type="image/webp" href="../img/bio_img.webp">
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
    <form method="post"  novalidate>
        <h2>HR.giger Museum</h2>
        <div class="flex_item_top">
            <p>Login</p>
            <label for="login"></label><input name="login" type="text" id="login" class="input" required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2, 3}$" placeholder="Login">
            <div class="invisible"></div>
            <p>Password</p>
            <label for="Password"></label><input name="mdp" type="password" class="input" id="Password" required placeholder="Password">
            <div class="invisible"></div>
            </div>
            <button id="btn" type="submit" name="submit">Sign In</button>
    </form>


</div>

    </div>
</div>
</body>
</html>