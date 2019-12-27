// Returns a specified number of nonbreaking spaces
function space(num) {
	var string = "";
	for(var i = 0; i < num; i++) {
		string += "&nbsp";
	}
	return string;
}

// Changes non-clearing descriptor text
function setDesc(string) {
	document.getElementById("desc").innerHTML = string;
}

var timer;

function stopTimer() {
	clearTimeout(timer);
}

// Stops an existing timer, changes optionally-clearing output text,
//	and if passed a number value as argument, clears output after that
//	many milliseconds.
function setOutput(string, opt) {
	stopTimer();
	document.getElementById("output").innerHTML = string;
	if(typeof opt == 'number') {
		timer = setTimeout(function() {document.getElementById("output").innerHTML = "";}, opt);
	}
}

function setCookie(cname, cvalue) {
	document.cookie = cname + "=" + cvalue + ";";
}

// Returns value for requested cookie
function getCookie(cname) {
	var cookie = document.cookie;
	var cookieSplit = cookie.split(/[\s;=]+/);
	for(var i = 0; i < cookieSplit.length; i++) {
		if(cookieSplit[i] == cname) {
			return cookieSplit[i + 1];
		}
	}
	return "";
}

// Deletes requested cookie
function deleteCookie(cname) {
	var d = new Date();
	d.setTime(d.getTime() - (24*60*60*1000));
	var expires = "expires=" + d.toUTCString();
	document.cookie = cname + "=;" + expires;
}

function showCookies() {
	var cookie = document.cookie;
	alert(cookie);
}

function deleteAllCookies() {
	var cookie = document.cookie;
	var cookieSplit = cookie.split(/[\s;=]+/);
	for(var i = 0; i < cookieSplit.length; i++) {
		if(cookieSplit[i] != 'expires' && cookieSplit[i] != 'path') {
			deleteCookie(cookieSplit[i]);
		}
	}
}