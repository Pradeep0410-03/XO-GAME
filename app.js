let boxes= document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset");

let turn0= true;
let Winpatterns=[
    [0,1,2],
    [2,4,6],
    [0,4,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [3,4,5],
    [6,7,8]
];

boxes.forEach((box) => {
    box.addEventListener("click", ()=>{
        console.log("Box was clicked");
        if(turn0){
           box.innerText = "O";
            turn0=false;
        }else{
      
            box.innerText = "X";
            turn0=true;
        }
        box.disabled=true;
        checkWinner();
    });
});
const checkWinner = () => {
    for (let pattern of Winpatterns) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if (
            pos1Val !== "" &&
            pos1Val === pos2Val &&
            pos2Val === pos3Val
        ) {
            console.log(`Winner is ${pos1Val}`);
            return;
        }
    }
};


resetBtn.addEventListener("click", () => {
    console.log("reset was clicked");

    boxes.forEach((box) => {
        box.innerText = "";
        box.disabled = false;
    });

    turn0 = true;
    
});
