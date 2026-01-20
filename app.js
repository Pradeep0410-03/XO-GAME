let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset");
const msgContainer = document.querySelector(".msg-container");
const msg = document.querySelector("#msg");
const newGameBtn = document.querySelector("#new-game");

let turnO = true;

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO) {
            box.innerText = "O";
            turnO = false;
        } else {
            box.innerText = "X";
            turnO = true;
        }

        box.disabled = true;
        checkWinner();
    });
});

const checkWinner = () => {
    for (let pattern of winPatterns) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if (
            pos1Val !== "" &&
            pos1Val === pos2Val &&
            pos2Val === pos3Val
        ) {
            showWinner(pos1Val);
            return;
        }
    }
};

const showWinner = (winner) => {
    msg.innerText = `Congratulations! Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};

const disableBoxes = () => {
    boxes.forEach(box => box.disabled = true);
};

const resetGame = () => {
    turnO = true;
    boxes.forEach(box => {
        box.innerText = "";
        box.disabled = false;
    });
    msgContainer.classList.add("hide");
};

resetBtn.addEventListener("click", resetGame);
newGameBtn.addEventListener("click", resetGame);
