var randomnumber1=Math.floor(Math.random()*6)+1;//1-6
var randomDiceImage="dice"+randomnumber1+".png";
var randomImageSource="images/"+randomDiceImage;
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImageSource);

var randomnumber2=Math.floor(Math.random()*6)+1;
var randomDiceImage="dice"+randomnumber2+".png";
var randomImageSource="images/"+randomDiceImage;
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",randomImageSource);

function refresh()
{
    document.querySelector("h1").innerHTML="Refresh Me";

    var image1=document.querySelectorAll("img")[0];
    image1.setAttribute("src","images/dice6.png");

    var image2=document.querySelectorAll("img")[1];
    image2.setAttribute("src","images/dice6.png");
}

if(randomnumber1>randomnumber2){
    document.querySelector("h1").innerHTML="🚩 Player_1!";
    const v=setTimeout(refresh,3000);
    
}
else if(randomnumber1<randomnumber2){
    document.querySelector("h1").innerHTML="Player_2!🚩";
    const v=setTimeout(refresh,3000);
}
else
{
    document.querySelector("h1").innerHTML="Draw!";
    const v=setTimeout(refresh,3000);
}