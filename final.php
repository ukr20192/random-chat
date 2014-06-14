<?php

$sid = intval($_GET['stranger']);
$con = mysqli_connect("localhost","ukr","qwerty","an");
$qr1 = "UPDATE usertable SET recievedMsg = '<-srvtm->' WHERE userid = $sid";
mysqli_query($con,$qr1);
mysqli_close($con);
echo "ok";

?>
