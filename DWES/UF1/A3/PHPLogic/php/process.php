<?php 
    session_start();
    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        $_SESSION['textIntroduit'] = $_POST['textIntroduit'];
        echo "<h1>Dades Processades</h1>";
    } else {
        header('Location: index.php');
    }
    session_destroy();
?>