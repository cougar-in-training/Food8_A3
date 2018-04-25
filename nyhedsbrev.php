<?php
$fra="foo8@josefinerasch.dk";
$til="josefinerasch@gmail.com";

$navn=$_REQUEST['navn'];
$email=$_REQUEST['email'];
$besked="<p style='font-family: sans-serif; font-size: 30px; color: purple'>".$_REQUEST['besked']."</p>";


mail($til, "besked fra $navn, $email", $besked, "Content-type:text/html; charset=utf-8\r\nfrom: $fra");
header("Location: tak.html");
?>
