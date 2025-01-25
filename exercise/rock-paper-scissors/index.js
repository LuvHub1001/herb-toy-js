const buttons = document.querySelectorAll("button");
const com_choice = document.querySelector(".computer-choice");
const user_choice = document.querySelector(".you-choice");
const gameRes = document.querySelector(".result");

const result = ["가위", "바위", "보"];

const game = (user, com) => {
  let res = "";
  if (user === com) res = "무승부";
  else {
    switch (user + com) {
      case "가위보":
      case "바위가위":
      case "보바위":
        res = "사용자 승리";
        break;

      case "보가위":
      case "가위바위":
      case "바위보":
        res = "컴퓨터 승리";
        break;
    }
  }
  return res;
};

const play = (event) => {
  const user = event.target.innerText;
  const randomIdx = Math.floor(Math.random() * 3);
  const com = result[randomIdx];

  user_choice.innerText = user;
  com_choice.innerText = com;
  gameRes.innerText = game(user, com);
};

buttons.forEach((button) => {
  button.addEventListener("click", play);
});
