console.log("shiv")

let music = new Audio("8Bit.mp3")
music.muted = false;

let Audioturn = new Audio("click.wav")
Audioturn.muted = false;

let isgameover = false;

let turn = "X"

//  function to change turn 
const ChangeTurn = () => {

    return turn === "X" ? "0" : "X"
}

//Function to check win
const checkwin = () => {
    let boxtext = document.getElementsByClassName('boxtext');
    let wins = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
    wins.forEach(e => {
        if ((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "")) {
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + "  won"
            isgameover = true
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width='256px';
        }
    })
}

// music.play();

// Game Logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', () => {
        music.play();
        if (boxtext.innerText === '') {
            boxtext.innerText = turn;
            turn = ChangeTurn();
            Audioturn.play();
            checkwin();
            if (!isgameover) {
                document.getElementsByClassName("info")[0].innerText = " Turn for  " + turn;
            }
        }
    })
})

//  Reset handler

reset.addEventListener('click',()=>{
    let boxtexts= document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element=>{
        element.innerText = ""
    });
    turn = "X";
    isgameover = false;
    document.getElementsByClassName("info")[0].innerText = " Turn for " + turn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width='0px';
    music.pause();
})
