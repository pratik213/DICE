var random1=Math.round(Math.random()*6)+1;
var dice1="dice"+random1+".png";
var source="images/"+dice1;
document.querySelectorAll("img")[0].setAttribute("src",source)

var random2=Math.round(Math.random()*6)+1;
var dice2="dice"+random2+".png";
var source2="images/"+dice2;
document.querySelectorAll("img")[1].setAttribute("src",source2)

if (random1>random2){
    document.querySelector("h1").innerHTMl="Player 1 wins"
}
else if(random1<random2){
    document.querySelector("h1").innerHTML="Player 2 wins"
}
else{
    document.querySelector("h1").innerHTML="Draw"
}

