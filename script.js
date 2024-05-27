let coin = document.querySelector(".coin");
let throws = document.querySelector(".throws");
let throwsCounter = 0;
let heads = document.querySelector(".heads");
let headsCounter = 0;
let tails = document.querySelector(".tails");
let tailsCounter = 0;
// console.log(throws)
coin.addEventListener("click", function(){
    let result=getRandomResult()
    if(result){
        coin.src="./img/heads.png"
        heads.innerText = ++headsCounter;
    }else{
        coin.src="./img/tails.png"
        tails.innerText = ++tailsCounter;
    }
    throws.innerText = ++throwsCounter;
})

function getRandomResult(){
    return Math.round(Math.random())
}