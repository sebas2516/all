var userName = "servWebElite";
var passWord = "$s3rvW3bEl1t3%";

function authenticateUser(user, password)
{
    var auth = user + ":" + password;
    // Should i be encoding this value????? does it matter???
    // Base64 Encoding -> btoa
    var hash = btoa(auth); 

    return "Basic " + hash;
}

function CallWebAPI() {

    // New XMLHTTPRequest
    var request = new XMLHttpRequest();
	var autenticate = authenticateUser(userName, passWord);
	// alert("Encode d string pasword:"+autenticate);
    request.open("get", "https://gps.coltrack.com/gps/api.jsp", false);	
    request.setRequestHeader("Authorization", authenticateUser(userName, passWord));  	
    request.send();
    // view request status
    // alert(request.status);
    response.innerHTML = request.responseText;
}

