<?php
$msg;
function makeuser()
{
	$temp = -1;
	while(2)
	{
		$con = mysqli_connect("localhost","ukr","qwerty","an");
		$qr = "SELECT * FROM usertable";
		$result = mysqli_query($con,$qr);
		
		while( $row = mysqli_fetch_array($result) )
		{
			if($row['status'] == 0)
			{
				$temp = $row['userid'];
				break;
			}
		}
		
		if($temp != -1)
		{
			mysqli_close($con);
			echo $temp." ";   // my id on DB_table
			setLookStatus($temp);
			break;
		}
	}
}

function setLookStatus($id)
{
	$id = $id;
	$con = mysqli_connect("localhost","ukr","qwerty","an");
	$qr = "UPDATE usertable SET status = 1 WHERE userid = $id";
	mysqli_query($con,$qr);
	mysqli_close($con);
	setConnect($id);
}

function setConnect($id)
{
	$temp = -1;
	while(2)
	{
		$con = mysqli_connect("localhost","ukr","qwerty","an");
		$qr = "SELECT * FROM usertable";
		$result = mysqli_query($con,$qr);
		
		while( $row = mysqli_fetch_array($result) )
		{
			if($row['status'] == 1 && $row['userid'] != $id)
			{
				$temp = $row['userid'];
				break;
			}
		}
		
		if($temp != -1)
		{
			mysqli_close($con);
			echo $temp." ";     // strangers id on DB_table
			setTalkStatus($id,$temp);
			break;
		}
	}
}

function setTalkStatus($id,$temp)
{
	$id = $id;
	$temp = $temp;
	$con = mysqli_connect("localhost","ukr","qwerty","an");
	$qr = "UPDATE usertable SET status = 2, talking = $temp WHERE userid = $id";
	mysqli_query($con,$qr);
	mysqli_close($con);
	
}




makeuser();
//flush_users();

?>
			
	
	

	
	
	
	
