const images = document.querySelectorAll(".item");
const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");

let idx = 0;
let lastIdx = images.length - 1;

const updateImg = () => {
  images.forEach((img) => img.classList.remove("show"));
  images[idx].classList.add("show");
};

const moveToNext = () => {
  if (idx === lastIdx) idx = 0;
  else idx++;
  updateImg();
};

const moveToPrev = () => {
  if (idx === 0) idx = lastIdx;
  else idx--;
  updateImg();
};

prevButton.addEventListener("click", moveToPrev);
nextButton.addEventListener("click", moveToNext);
