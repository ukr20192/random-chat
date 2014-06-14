<?php

$msg = $_POST['msg'];
$uid = intval($_POST['user']);
$sid = intval($_POST['stranger']);
$con = mysqli_connect("localhost","ukr","qwerty","an");
$qr = "UPDATE usertable SET sendMsg = '$msg' WHERE userid = $uid";
mysqli_query($con,$qr);
$qr1 = "UPDATE usertable SET recievedMsg = '$msg' WHERE userid = $sid";
mysqli_query($con,$qr1);
mysqli_close($con);
echo "ok";

?>
