let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newgameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true;
let winPattens = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO === true) {
      box.innerText = "O";
      turnO = false;
    } else {
      box.innerText = "X";
      turnO = true;
    }
    box.disabled = true;

    checkwinner();
  });
});

// reset btn function
const resetGame = () => {
  let turnO = true;
  enableBoxes();
  msgContainer.classList.add("hide");
};

// all boxes btns disable funcation
const disableBoxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

// all boxes btns enable funcation
const enableBoxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};

// show winner function
const showWinner = (winner) => {
  // two type of show data
  msg.innerText = `Congratulations, Winner is ${winner}`;
  //   msg.innerText = "Congratulation Winner is " + winner;

  msgContainer.classList.remove("hide");
  disableBoxes();
};

// check winPattens function
const checkwinner = () => {
  for (let patten of winPattens) {
    let Posval1 = boxes[patten[0]].innerText;
    let Posval2 = boxes[patten[1]].innerText;
    let Posval3 = boxes[patten[2]].innerText;

    if (Posval1 != "" && Posval2 != "" && Posval3 != "") {
      if (Posval1 === Posval2 && Posval2 === Posval3) {
        showWinner(Posval1);
      }
    }
  }
};

// reset btn and new game btn
newgameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);
