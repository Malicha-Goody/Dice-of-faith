var random = Math.floor(Math.random () * 6) +1;
var randomDice = "dice" + random + ".jpg";
console.log(randomDice);

var imageSource = "images/" + randomDice;
var image1 = document.querySelectorAll("img") [0];
image1.setAttribute("src", imageSource);

var random2 = Math.floor(Math.random() * 6) + 1;
var randomDice2 = "dice" + random2 + ".jpg";
var imageSource2 = "images/" + randomDice2;
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", imageSource2);

if (random>random2) {
    document.querySelector("h1").innerHTML= "🚩 Player1 Wins 🥳";
} else if(random<random2) {
    document.querySelector("h1").innerHTML= "🚩 Player2 Wins🎉";
}
else{
    document.querySelector("h1").innerHTML="😢 It's a tie 😭";
}