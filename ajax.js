function Ajax_Send(GP,URL,PARAMETERS,RESPONSEFUNCTION){
var xmlhttp;
try{xmlhttp=new ActiveXObject("Msxml2.XMLHTTP")}
catch(e){
try{xmlhttp=new ActiveXObject("Microsoft.XMLHTTP")}
catch(e){
try{xmlhttp=new XMLHttpRequest()}
catch(e){
alert("Your Browser Does Not Support AJAX")}}}

xmlhttp.onreadystatechange=function(){
if (xmlhttp.readyState == 4){
if (RESPONSEFUNCTION=="") return false;
RESPONSEFUNCTION(xmlhttp.responseText);
}
}

if (GP=="GET"){
URL+="?"+PARAMETERS
xmlhttp.open("GET",URL,true);
xmlhttp.send();
}

if (GP="POST"){
PARAMETERS=encodeURI(PARAMETERS);
xmlhttp.open("POST",URL,true);
xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
xmlhttp.setRequestHeader("Content-length",PARAMETERS.length);
xmlhttp.setRequestHeader("Connection", "close");
xmlhttp.send(PARAMETERS);
}
}


