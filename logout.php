<?php
 session_start();
 session_destroy();
 header('Location:page_connection_backoffice.php');
?>