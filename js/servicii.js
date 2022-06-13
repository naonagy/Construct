
    function validation(event)
    {
    var name = document.getElementById("name").value;
    var tel = document.getElementById("phone").value;
    var email = document.getElementById("mail").value;
    var error = document.getElementById("errormsg");
    var textarea= document.getElementById("ment").value;
    
    var message;
    error.style.paddingBottom="25px";

    if(textarea.length < 100)
    {
        message= "Introduceti minimum 150 de  caractere!";
        error.innerHTML=message;
        document.getElementById("ment").style.backgroundColor = "#e9d0e2";
        event.preventDefault();
    }
    if(!(document.getElementById('star1').checked || document.getElementById('star2').checked || document.getElementById('star1').checked || document.getElementById('star3').checked ||document.getElementById('star4').checked||document.getElementById('star5').checked))
    {  
        message= "Adaugati rating-ul!";
        error.innerHTML=message;
        event.preventDefault();
    }
    if(email.length<5 || email.search("@") == -1)
    {
        message= "Introduceti o adresa de email valida!";
        document.getElementById("mail").style.backgroundColor = "#e9d0e2";
        error.innerHTML=message;
        event.preventDefault();
    }   
    if(isNaN(tel) || tel.length<10 ||tel.length>13)
    {
        message= "Introduceti un numar de telefon valid!";
        error.innerHTML=message;
        document.getElementById("phone").style.backgroundColor = "#e9d0e2";
        event.preventDefault();
    }
    if(name.length < 6)
    {
        message= "Introduceti un nume complet!";
        error.innerHTML=message;
        document.getElementById("name").style.backgroundColor = "#e9d0e2";
        event.preventDefault();
    }
    return true;
    }

// Function that executes on click of first next button.
function next_step1() {
    document.getElementById("first").style.display = "none";
    document.getElementById("second").style.display = "block";
    document.getElementById("active2").style.color = "red";
    }
    // Function that executes on click of first previous button.
    function prev_step1() {
    document.getElementById("first").style.display = "block";
    document.getElementById("second").style.display = "none";
    document.getElementById("active1").style.color = "red";
    document.getElementById("active2").style.color = "gray";
    }
