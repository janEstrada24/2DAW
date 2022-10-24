<?php 
    session_start();
        
        if ($_SERVER['REQUEST_METHOD'] === 'POST') {
            if (isset($_POST['method'])) {
                if ($_POST['method'] == 'signup') {
                    $_SESSION['nom'] = $_POST['nom'];
                    $_SESSION['correu'] = $_POST['correu'];
                    $_SESSION['contrasenya'] = $_POST['contrasenya'];

                    if (isset($_SESSION['nom']) && isset($_SESSION['correu']) && isset($_SESSION['contrasenya'])) {

                        $_SESSION['nom'] = $_POST['nom'];
                        $_SESSION['correu'] = $_POST['correu'];
                        $_SESSION['contrasenya'] = $_POST['contrasenya'];
            
                        $fitxerJSON = "users.json";
                        $data = llegeix($fitxerJSON);
                        $posts = array();
                        $nom = $_SESSION['nom'];
                        $correu = $_SESSION['correu'];
                        $contrasenya = $_SESSION['contrasenya'];
                        $post = array($nom, $correu, $contrasenya);
                        $posts[$correu] = $post;
                        if (in_array($posts[$correu], $data)) {
                            header('Location: index.php?error=UsuariJaExistent', true, 303);
                        } elseif ($nom == null || $correu == null || $contrasenya == null) {
                            header('Location: index.php?error=DadesIncorrectes', true, 303);
                        } else {
                            array_push($data, $posts);
                            escriu($data, $fitxerJSON);
                            header('Location: hola.php', true, 302);
                        }
                    }
                }
                
                if ($_POST['method'] == 'signin') {
                    $_SESSION['correu'] = $_POST['correu'];
                    $_SESSION['contrasenya'] = $_POST['contrasenya'];
                    if (isset($_SESSION['correu']) && isset($_SESSION['contrasenya'])) {
                        $_SESSION['correu'] = $_POST['correu'];
                        $_SESSION['contrasenya'] = $_POST['contrasenya'];
            
                        $fitxerJSON = "users.json";
                        $data = llegeix($fitxerJSON);
                        $correu2 = $_SESSION['correu'];
                        $contrasenya2 = $_SESSION['contrasenya'];
                        if (in_array($post, $data)) {
                            header('Location: hola.php', true, 302);
                        } else {
                            header('Location: index.php?error=UsuariNoExistent', true, 303);
                        }
            
                    }
                }
            }
            
        }
        
    /**
     * Llegeix les dades del fitxer. Si el document no existeix torna un array buit.
     *
     * @param string $file
     * @return array
     */
    function llegeix(string $file) : array
    {
        $var = [];
        if ( file_exists($file) ) {
            $var = json_decode(file_get_contents($file), true);
        }
        return $var;
    }

    /**
     * Guarda les dades a un fitxer
     *
     * @param array $dades
     * @param string $file
     */
    function escriu(array $dades, string $file): void
    {
        file_put_contents($file,json_encode($dades, JSON_PRETTY_PRINT));
    }

?>