<?php
 
$id = intval($_GET['user']);
$con = mysqli_connect("localhost","ukr","qwerty","an");
$qr1 = "SELECT talking FROM usertable WHERE userid = $id";
$result = mysqli_query($con,$qr1);
$row = mysqli_fetch_array($result);
$tid = $row['talking'];
$qr = "UPDATE usertable SET status = 0, talking = 0, extra = 0, sendMsg = '0', recievedMsg = '0' WHERE userid = $id OR userid = $tid";
mysqli_query($con,$qr);
mysqli_query($con,"UPDATE usertable SET extra = 1 WHERE userid = $tid");
mysqli_close($con);
echo $tid;
 
?>
