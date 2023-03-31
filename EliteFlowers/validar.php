<?php
$error;
if(!empty($_POST['nickname']) && !empty($_POST['password'])){
  $nickname = $_POST['nickname'];
  $password = $_POST['password'];
  if($nickname == "u5uar10"  && $password == "3L173FL0W3R5"){
    // $error = "OK";
    header("location: vehiculos.html");

  }else{
    $error = "INCORRECTO";
    echo "Usuario o contraseña incorrectos";
  }

}else{
    $error = "VACIO";
    echo "Los campos estan vacios";
}