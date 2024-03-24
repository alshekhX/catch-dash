const screens = document.querySelectorAll(".screen");

const choose_insect_btns = document.querySelectorAll(".choose-insect-btn");
const start_btn = document.getElementById("start-btn");
const game_container = document.getElementById("game-container");
console.log(game_container);
const timeEl = document.getElementById("time");
const scoreEl = document.getElementById("score");
const messageEl = document.getElementById("message");
const cat_cute = document.getElementById("cat-cute");
const cat_angry = document.getElementById("cat-angry");
const title = document.querySelector(".title");

let mode;
let current_animals = [];
let cute;
let angry;

let secounds = 0;
let score = 0;
const colors = [
  "#f037a5",  // Hot pink
  "#ffd700",  // Gold
  "red",  // Royal blue
  "#28a745",  // Forest green
  "#ffc107"   // Orange
];

const cats = [
  {
    enter: "assets/audio/cute_cat.mp3",
    exit: "assets/audio/angry_cat.wav",
    img: "https://png.pngtree.com/png-clipart/20230511/ourmid/pngtree-isolated-cat-on-white-background-png-image_7094927.png",
  },
  {
    enter: "assets/audio/cute_cat2.wav",
    exit: "assets/audio/angry_cat2.wav",
    img: "assets/images/cat2.png",
  },
  {
    enter: "assets/audio/cute_cat3.mp3",
    exit: "assets/audio/angry_cat3.wav",
    img: "assets/images/cat3.png",
  },
];

const dogs = [
  {
    enter: "assets/audio/cute_dog.wav",
    exit: "assets/audio/angry_dog.wav",
    img: "assets/images/dog4.png",
  },
  {
    enter: "assets/audio/cute_dog2.wav",
    exit: "assets/audio/angry_dog2.wav",
    img: "assets/images/dog5.png",
  },
  {
    enter: "assets/audio/cute_dog3.wav",
    exit: "assets/audio/angry_dog.wav",
    img: "assets/images/dog2.png",
  },
];

let selected_insect = {};

setInterval(changeColor, 500);

function changeColor() {
  title.style.color = colors[Math.floor(Math.random() * colors.length)];
}

window.addEventListener("load", setInterval);

start_btn.addEventListener("click", () => {
  screens[0].classList.add("up");
});

choose_insect_btns.forEach((button) => {
  button.addEventListener("click", () => {
    mode = button.getAttribute("id");
    current_animals = mode == "cats" ? cats : dogs;

    screens[1].classList.add("up");
    setTimeout(createInsect, 1000);
    startGame();
  });
});

function startGame() {
  title.style.display =`none`;
  setInterval(increaseTime, 1000);
}

function increaseTime(params) {
  let m = Math.floor(secounds / 60);
  let s = secounds % 60;
  m = m < 10 ? `0${m}` : m;
  s = s < 10 ? `0${s}` : s;
  timeEl.innerHTML = `Time: ${m}:${s}`;
  secounds++;
}

function createInsect() {
  const insect = document.createElement("div");
  // const animal= cats[Math.floor(Math.random() * cats.length)]
  const animal =
    current_animals[Math.floor(Math.random() * current_animals.length)];

  cute = document.createElement("audio");
  angry = document.createElement("audio");

  cute.src = animal.enter;
  angry.src = animal.exit;

  insect.classList.add("insect");
  const { x, y } = getRandomLocation();

  insect.style.top = `${y}px`;
  insect.style.left = `${x}px`;
  insect.innerHTML = `<img src="${animal.img}" alt="${
    selected_insect.alt
  }" style="transform: rotate(${Math.random() * 360}deg)"  />`;

  insect.addEventListener("mouseenter", catchInsect);

  game_container.appendChild(insect);
  game_container.appendChild(cute);
  game_container.appendChild(angry);

  cute.play();
}

function getRandomLocation() {
  const width = window.innerWidth;
  const height = window.innerHeight;
  const x = Math.random() * (width - 250) + 100;
  const y = Math.random() * (height - 250) + 100;
  return { x, y };
}

function catchInsect() {
  increaseScore();
  this.classList.add("caught");
  angry.play();
  cute.remove();
  setTimeout(() => angry.remove(), 2500);
  setTimeout(() => cute.remove(), 2000);

  setTimeout(() => this.remove(), 2000);
  addInsect();
}
function addInsect() {
  setTimeout(createInsect, 1500);
  setTimeout(createInsect, 7000);
}

function increaseScore() {
  score++;

  if (score > 50) {
    messageEl.classList.add("visible");
  }
  scoreEl.innerHTML = `Score: ${score}`;
}
