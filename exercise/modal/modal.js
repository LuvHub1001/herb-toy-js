// let modalBtns = document.getElementsByClassName(".modal-btn");
// let modalWrapper = document.querySelector(".modal-wrapper");
// let isClicked = false;

// modalBtns.forEach((btn) => {
//   btn.addEventListener("click", () => {
//     modalWrapper.style.display = isClicked ? "flex" : "none";
//     isClicked = !isClicked;
//   });
// });

const openButton = document.querySelector(".open");
const closeButton = document.querySelector(".close");
const container = document.querySelector(".container");

openButton.addEventListener("click", () => {
  container.style.display = "flex";
  openButton.style.display = "none"; // Modal 열리면 Open 버튼 안보이게 처리
});

closeButton.addEventListener("click", () => {
  container.style.display = "none";
  openButton.style.display = "block";
});
