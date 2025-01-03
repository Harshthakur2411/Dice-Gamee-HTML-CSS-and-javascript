var randomNumber1 = Math.floor(Math.random()*6)+1;
document.querySelector(".img1").setAttribute("src","dice"+randomNumber1+".png");
var randomNumber2 = Math.floor(Math.random()*6)+1;
document.querySelector(".img2").setAttribute("src","dice"+randomNumber2+".png");
if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 is Winnnnnnn✌️";
}
else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML = "Player 2 is Winnnnnn✌️";
}
else{
    document.querySelector("h1").innerHTML = "Match is Drawwwww!!";
}