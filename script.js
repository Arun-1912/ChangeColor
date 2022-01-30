const hexNumbers = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
const hexbtn = document.querySelector(".hexbtn");
const bodyBcg = document.querySelector("body");
const hex = document.querySelector(".hex");

hexbtn.addEventListener("click",gethex);

function gethex(){
    let hexCol = "#";
    for(let i=0;i<6;i++){
        let random = Math.floor(Math.random()*hexNumbers.length);
        hexCol += hexNumbers[random];
        
    }
    bodyBcg.style.background = hexCol;
    hex.innerHTML = hexCol;

}