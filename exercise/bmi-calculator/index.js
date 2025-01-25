const heightInput = document.querySelector(".height-input");
const weightInput = document.querySelector(".weight-input");
const calculateBtn = document.querySelector(".calculate-btn");
const modalContainer = document.querySelector(".modal-container");
const modal = document.querySelector(".modal");

const display = (bmi) => {
  let res;

  if (bmi >= 30.0) res = "중등도비만";
  else if (bmi >= 25.0) res = "경도비만";
  else if (bmi >= 23.0) res = "과체중";
  else if (bmi >= 18.5) res = "정상";
  else res = "저체중";

  return res;
};

const calculateRes = (weight, height) => {
  height = height / 100;
  return (weight / (height * height)).toFixed(1);
};

calculateBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const heightVal = heightInput.value;
  const weightVal = weightInput.value;

  if (heightVal !== "" && weightVal !== 0) {
    modalContainer.style.display = "flex";
    const bmi = calculateRes(weightVal, heightVal);
    const bmiRes = display(bmi);

    heightInput.value = "";
    weightInput.value = "";

    modal.innerHTML = `
        <div>
          <div>${bmi}</div>
          <div>${bmiRes}</div>
        </div>
        `;
  }
});

modal.addEventListener("click", () => {
  modalContainer.style.display = "none";
});
