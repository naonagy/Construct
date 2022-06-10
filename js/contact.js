function validate()
{
var name = document.getElementById("name").value;
var tel = document.getElementById("phone").value;
var email = document.getElementById("mail").value;
var checkb = document.getElementById("flexSwitchCheckDefault");
var error = document.getElementById("errormsg");


var message;
error.style.paddingBottom="25px"

if(name.length < 6)
{
    message= "Introduceti un nume complet!";
    error.innerHTML=message;
    document.getElementById("name").style.backgroundColor = "#e9d0e2";
    return false;
}
if(isNaN(tel) || tel.length<10 ||tel.length>13)
{
    message= "Introduceti un numar de telefon valid!";
    error.innerHTML=message;
    document.getElementById("phone").style.backgroundColor = "#e9d0e2";
    return false;
}
if(email.length<5 || email.search("@") == -1)
{
    message= "Introduceti o adresa de email valida!";
    document.getElementById("mail").style.backgroundColor = "#e9d0e2";
    error.innerHTML=message;
    return false;
}
if(!checkb.checked)
{
    message= "Acordul dvs. este necesar pentru trimiterea formularului!";
    error.innerHTML=message;
    document.getElementById("flexSwitchCheckDefault").style.backgroundColor = "#e9d0e2";
    return false;
}
return true;
}

