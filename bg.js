const body = document.querySelector("body");

const IMG_NUMBER = 4;

function paintImage(imgNum) {
  const image = new Image();
  image.src = `images/${imgNum}.jpg`;
  image.classList.add("bgImage");
  body.appendChild(image);
}

function getRandon() {
  const number = Math.floor(Math.random() * IMG_NUMBER + 1);
  return number;
}

function init() {
  const randomNum = getRandon();
  paintImage(randomNum);
}

init();
