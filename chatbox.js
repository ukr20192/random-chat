var userID;
var strangeID;
var msg;
var alreadyIn = 0;
var e = 0;
var updateInterval;

// Sign in
function signIn()
{
	data = "";
	Ajax_Send("GET","user03.php",data,testsignin);
	//return false;
}

// Sign out
function signOut()
{
	data = "user=" + userID;
	Ajax_Send("GET","userout03.php",data,checksignout);
	//return false;	
}

// Sign in response
function testsignin(res)
{
	document.getElementById("box").style.visibility = "visible";
	var res_arr = res.split(" ");
	userID = Number(res_arr[0]);
	strangeID = Number(res_arr[1]);
	if(userID && strangeID)
	{
		var tr = document.getElementById("text").innerHTML;
		document.getElementById("text").innerHTML = tr + "<br> your id is " + res_arr[0] + "<br> stranger id is " + res_arr[1] ;
		alreadyIn = 1;
		document.getElementById("status").innerHTML = "testsign";
		updateInterval=setInterval("updateMsg()",500);
	}
}

// sign out response
function checksignout(res)
{
	//document.getElementById("text").innerHTML = "you are disconnected from stranger ["+res+"] : ";
	data="stranger=" + strangeID;
	Ajax_Send("GET","final03.php",data,dummy);
	
	window.clearInterval(updateInterval);
	window.open("page03.html","_parent");
	return false;	
}


// Send message
function sendMessage()
{
	msg = document.getElementById("field").value;
	if(msg)
	{
		data="msg="+msg+"&user="+userID+"&stranger="+strangeID;
		Ajax_Send("POST","send03.php",data,sentOk);
	}

}

// display sent msg
function sentOk(res)
{
	if(res == "ok")
	{
		var para = document.createElement("p");
		var node = document.createTextNode("me : "+msg);
		para.appendChild(node);
		var element = document.getElementById("displayArea");
		element.appendChild(para);
		document.getElementById("field").value = "";
		window.scrollTo(0,1000000);
		document.getElementById("field").focus();	
	}
	else
	{
		var para = document.createElement("p");
		var node = document.createTextNode("error while sending");
		para.appendChild(node);
		var element = document.getElementById("displayArea");
		element.appendChild(para);
		window.scrollTo(0,1000000);
		document.getElementById("field").focus();
	}
}


// update recieved messages
function updateMsg()
{
	document.getElementById("status").innerHTML = "updatemsg";
	data = "user=" + userID;
	Ajax_Send("GET","recieved03.php",data,showMsg);
	Ajax_Send("GET","extra03.php",data,checkOut);
}


//display recieved messages
function showMsg(res)
{
	document.getElementById("status").innerHTML = "showmsg";
	if(res != '0' && res != '' && res != "<-srvtm->" )
	{
		var para = document.createElement("p");
		var node = document.createTextNode("stranger : "+res);
		para.appendChild(node);
		var element = document.getElementById("displayArea");
		element.appendChild(para);
		window.scrollTo(0,1000000);
	}
	else if(res == "<-srvtm->" || e == 1)
	{
		alreadyIn = 0;
		strangeID = 0;
		document.getElementById("field").value = "";
		document.getElementById("box").style.visibility = "hidden";
		var para = document.createElement("p");
		para.id = "finalPara";
		var element = document.getElementById("displayArea");
		element.appendChild(para);
		document.getElementById("finalPara").innerHTML = "you are disconnected...... <a href='page03.html' >Start a new chat</a>";
		window.scrollTo(0,1000000);
		
	}
		
}

// dummy event
function dummy(res)
{
	/*if(res == "ok")
	{
		alreadyIn = 0;
	}*/
	return true;
	//does nothing
}

function checkOut(res)
{
	e = Number(res);
}
	 


		

