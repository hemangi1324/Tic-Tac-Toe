let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset");
let newButton = document.querySelector("#new");
let msgclass = document.querySelector(".newgame");
let msg = document.querySelector("#msg");

let turnofo = true;

const winPatterns = [
    [0, 1, 2],
    [1, 4, 7],
    [0, 3, 6],
    [0, 4, 8],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

const resetgame =()=>{
    turnofo = true;
    enableboxes();
    msgclass.style.display = "none";
};

const disableboxes =() =>{
    for(let box of boxes){
        box.disabled = true;
    }
}

const enableboxes =() =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText="";
    }
}


const showwinner = (winner) =>{
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgclass.style.display = "block";
    disableboxes();
};

const checkwinner=()=>{
    for(let pattern of winPatterns){
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;
    
    if(pos1 != "" && pos2 != "" && pos3 != ""){
        if(pos1 === pos2 && pos2===pos3){
            console.log("winner");
            showwinner(pos1);
        }
    }
}
    matchdraw();
};

const Drawmatch = ()=>{
    msg.innerText = "It's a Draw!!";
    msgclass.style.display = "block";
    disableboxes();
}

const matchdraw=()=>{
    let filled = true;
    for(let box of boxes){
    if(box.innerText === ""){
        filled = false;
        break;
    } 
    }
    if(filled && !turnofo){
        Drawmatch();
    }
};

boxes.forEach((box)=>{
    box.addEventListener("click", ()=>{
        if(turnofo){
            box.innerHTML = "O";
            turnofo = false;
        }else{
            box.innerText = "X";
            turnofo = true;
        }
        box.disabled = true;

        checkwinner();
    });
});

newButton.addEventListener("click",resetgame);
resetbtn.addEventListener("click",resetgame);

