let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector(".resetBtn");
let newBtn=document.querySelector(".newBtn");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector(".msg");

let turn=true;//Player O
let winningPatterns=[
    [0,1,2],[0,3,6],[0,4,8],
    [1,4,7],[2,4,6],[2,5,8],
    [3,4,5],[6,7,8]
];

boxes.forEach((box) => {
    box.addEventListener("click",()=>{
        if(turn){
            box.innerText="O";  
            box.style.color="#c1121f";
            turn=false;
            
        }
        else{
            box.innerText="X";
            box.style.color="#0a9396";
            turn=true;
        }
        box.disabled=true;
        checkWinner();
    });
});


const reset = () =>{
    turn=true;
    enableBoxes();
    msgContainer.classList.add("hide");
};

const disableBoxes = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
};

const enableBoxes = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText="";
    }
};

const announceWinner = (winner) =>{
    msg.innerText=`Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};

let checkWinner = () =>{
    for( let patterns of winningPatterns){
        let posVal1 = boxes[patterns[0]].innerText;
        let posVal2 = boxes[patterns[1]].innerText;
        let posVal3 = boxes[patterns[2]].innerText;

        if(posVal1 != "" && posVal2 != "" && posVal3 != ""){
            if(posVal1 === posVal2 && posVal2 === posVal3){
                announceWinner(posVal1);
            }
        }
    }
};

newBtn.addEventListener("click",reset);
resetBtn.addEventListener("click",reset);