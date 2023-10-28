let turn = "X";
let gameover=false;

const changeturn =() => {
    return turn === "X" ? "O" : "X"
}
const checkwin = () => {
    let boxtext=document.getElementsByClassName("boxtext");
    let wins=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ]
    wins.forEach(e=>{
        if((boxtext[e[0]].innerText===boxtext[e[1]].innerText) &&(boxtext[e[1]].innerText===boxtext[e[2]].innerText )&&(boxtext[e[0]].innerText!==""))
        {
            document.querySelector("div>h1").innerText= boxtext[e[0]].innerText +"Won"
            gameover=true;
        }
       
    })
}

reset.addEventListener('click',()=>{
    let boxtext=document.querySelectorAll('.boxtext');
    Array.from(boxtext).forEach(element=>{
        element.innerText=""
    })

})

/*game logic*/
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', () => {
        if (boxtext.innerText === '') {
            boxtext.innerText = turn;
            turn = changeturn();
            checkwin();
            if(gameover!==true)
            {
                document.getElementsByClassName("turn")[0].innerText = "Turn for " + turn;
            document.querySelector("div>h1").innerText="";
            }
        }
    })
})
