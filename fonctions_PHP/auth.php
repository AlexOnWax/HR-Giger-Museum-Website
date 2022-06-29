<?php

var_dump($_POST['data']);

function is_connected():bool {
   if(session_status() === PHP_SESSION_NONE){
      session_start();
   }
   return !empty($_SESSION['connecté']);
}
function force_user_connected () : void {
if(!is_connected()){
  
   exit();
   
   }
}
?>