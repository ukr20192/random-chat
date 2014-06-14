<?php

$uid = intval($_GET['user']);
$con = mysqli_connect("localhost","ukr","qwerty","an");
$qr1 = "SELECT extra FROM usertable WHERE userid = $uid";
//$qr2 = "UPDATE usertable SET extra = '0' WHERE userid = $uid";
$result = mysqli_query($con,$qr1);
//mysqli_query($con,$qr2);
$row = mysqli_fetch_array($result);
$res = $row['extra'];
mysqli_close($con);
echo $res;

?>
