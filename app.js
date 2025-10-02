let gameSeq = [];
let userSeq = [];
let btns = ["yellow", "purple", "green", "red"];
let started = false;
let level = 0;
let h2  =document.querySelector("h2");
document.addEventListener("keypress", function(){
    if(!started){
        started = true;
        console.log("Game started");
    }

    levelUp();
});

function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 250);
}
function userFlash(btn){
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 250);
}

function levelUp(){
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;

    let randomIdx = Math.floor(Math.random() * 4); 
    let randomColour = btns[randomIdx];
    let randombtn = document.querySelector(`.${randomColour}`);
    gameSeq.push(randomColour);
    btnFlash(randombtn);
}

function checkAns(idx){
    if(userSeq[idx] == gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp, 1000);
        }
    }
    else{
        h2.innerHTML = `Game Over! Your Score was <b> ${level}</b> <br> Press Any button to restart the game`;
        reset();
    }
}

function btnPress(){
    let btn = this;
    userFlash(btn);

    userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    checkAns(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click", btnPress);
}

function reset(){
    level = 0;
    userSeq = [];
    gameSeq = [];
    started = false;
}
