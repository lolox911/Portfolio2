<?php
                        if (isset($_POST['email']) && $_POST['email'] != ''){
                            if (filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {
                                $nom = $_POST['nom'];
                                $mail = $_POST['email'];
                                $sujet = $_POST['sujet'];
                                $message = $_POST['message'];

                                $monmail = "loicnirlo46@gmail.com";
                                $headers = "From: ".$mail;
                                $txt = "Vous avez reçu un e-mail de ".$nom.".\n\n".$message;

                                if (mail($monmail, $txt, $headers)) {
                                    echo "<body style='background-color: #24252A;'> <div style='text-align:center; font-size:25px; color:white;'> Votre message a parfaitement été envoyé, vous allez être redirigé dans moins de 5 secondes </div> </body>";
                                    header("Refresh:6; url=index.html");
                                } else {
                                    echo "<body style='background-color: #24252A;'> <div style='text-align:center; font-size:25px; color:white;'> Problème lors de l'envoie du message, veuillez réessayer, redirection dans moins de 5 secondes </div> </body>";
                                    header("Refresh:6; url=index.html");
                                }
                            }
                        }
                    ?>
    