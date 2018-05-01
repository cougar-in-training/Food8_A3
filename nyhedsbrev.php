<?php
$fra="foo8@josefinerasch.dk";
$til="josefinerasch@gmail.com";

$navn=$_REQUEST['navn'];
$email=$_REQUEST['email'];



mail($til, "besked fra $navn, $email", "Content-type:text/html; charset=utf-8\r\nfrom: $fra");
header('Location: index.html');
?>
