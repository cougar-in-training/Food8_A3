<?php
$fra="food8@josefinerasch.dk";
$til="food8@laise.dk";

$navn=$_REQUEST['navn'];
$email=$_REQUEST['email'];
$besked="<p style='font-family: sans-serif; font-size: 30px; color:green'>".$_REQUEST['besked']."</p>";

mail($til, "Besked fra $navn, $email", $besked, "Content-type:text/html; charset-utf-8\r\nfrom:$fra");
header("Location: tak.html");
?>
