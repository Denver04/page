let randomNumber1=1 + Math.floor((6*Math.random()));
// console.log(randomNumber);

let randomNumber2=1 + Math.floor((6*Math.random()));

// if(randomNumber===1){
//     document.querySelector(".img1").setAttribute("src","images/dice1.png");
// }
// else if(randomNumber===2){
//     document.querySelector(".img1").setAttribute("src","images/dice2.png");
// }
// else if(randomNumber===3){
//     document.querySelector(".img1").setAttribute("src","images/dice3.png");
// }
// else if(randomNumber===4){
//     document.querySelector(".img1").setAttribute("src","images/dice4.png");
// }
// else if(randomNumber===5){
//     document.querySelector(".img1").setAttribute("src","images/dice5.png");
// }
// else{
//     document.querySelector(".img1").setAttribute("src","images/dice6.png");
// }


// if(randomNumber===1){
//     document.querySelector(".img2").setAttribute("src","images/dice6.png");
// }
// else if(randomNumber===2){
//     document.querySelector(".img2").setAttribute("src","images/dice5.png");
// }
// else if(randomNumber===3){
//     document.querySelector(".img2").setAttribute("src","images/dice4.png");
// }
// else if(randomNumber===4){
//     document.querySelector(".img2").setAttribute("src","images/dice3.png");
// }
// else if(randomNumber===5){
//     document.querySelector(".img2").setAttribute("src","images/dice2.png");
// }
// else{
//     document.querySelector(".img2").setAttribute("src","images/dice1.png");
// }

let randomlink2="images/dice"+ randomNumber2 +".png";
document.querySelector(".img2").setAttribute("src",randomlink2)
let randomlink1="images/dice"+randomNumber1+".png";
document.querySelector(".img1").setAttribute("src",randomlink1);