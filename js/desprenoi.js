//functiile care executa counterul

let counts=setInterval(updated, value= 70, pace= 1000, auto= true);
let upto=0;
function updated()
{
    var count= document.getElementById("counter");
    count.innerHTML=++upto;

    if(upto===112)
    {
        clearInterval(counts);
    }
}
let counts2=setInterval(updated2, value= 150, pace= 1000, auto= true);
let upto2=0;
function updated2()
{
    var count= document.getElementById("counter2");
    count.innerHTML=++upto2;

    if(upto2===42)
    {
        clearInterval(counts2);
    }
}
let counts3=setInterval(updated3, value= 90, pace= 900, auto= true);
let upto3=0;
function updated3()
{
    var count= document.getElementById("counter3");
    count.innerHTML=++upto3;
    
    if(upto3===87)
    {
        clearInterval(counts3);
    }
}