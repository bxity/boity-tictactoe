let buttonRef = document.querySelectorAll(".button-option");
let popupRef = document.querySelector(".popup");
let newGameButton = document.getElementById("new-game");
let restartButton = document.getElementById("restart");
let messageRef = document.getElementById("message");

let winningPattern = [
  [0, 1, 2],
  [0, 3, 6],
  [2, 5, 8],
  [6, 7, 8],
  [3, 4, 5],
  [1, 4, 7],
  [0, 4, 8],
  [2, 4, 6],
];

let xTurn = true;
let count = 0;

const disableButtons = () => {
  buttonRef.forEach((element) => (element.disabled = true));
  popupRef.classList.remove("hide");
};

const enableButtons = () => {
  buttonRef.forEach((element) => {
    element.innerText = "";
    element.disabled = "false";
  });

  popupRef.classList.add("hide");
};

const winFunction = (letter) => {
  disableButtons();
  if (letter == "X") {
    messageRef.innerHTML = "&#x1F389; <br> 'X' Wins";
  } else {
    messageRef.innerHTML = "&#x1F389; <br> 'O' Wins";
  }
};

const drawFunction = () => {
  disableButtons();
  messageRef.innerHTML = "&#x1F60E; <br> It's a Draw!";
};

newGameButton.addEventListener("click", () => {
  count = 0;
  enableButtons();
});

restartButton.addEventListener("click", () => {
  count = 0;
  enableButtons();
});

const winChecker = () => {
  for (let i of winningPattern) {
    let [element1, element2, element3] = [
      buttonRef[i[0]].innerText,
      buttonRef[i[1]].innerText,
      buttonRef[i[2]].innerText,
    ];

    if (element1 != "" && (element2 != "") & (element3 != "")) {
      if (element1 == element2 && element2 == element3) {
        winFunction(element1);
      }
    }
  }
};

buttonRef.forEach((element) => {
  element.addEventListener("click", () => {
    if (xTurn) {
      element.innerText = "X";
      element.disabled = true;
    } else {
      xTurn = true;

      element.innerText = "O";
      element.disabled = true;
    }

    count += 1;
    if (count == 9) {
      drawFunction();
    }

    winChecker();
  });
});

window.onload = enableButtons;
