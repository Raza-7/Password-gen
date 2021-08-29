<?php
$servername= "localhost";
$username="username";
$database="login";
$password="";

$conn= mysqli_connect($servername,$username,$database,$password);
if($conn){echo"yuo ar connected"}
else{
    die("sorry! connection failed");
}


?>