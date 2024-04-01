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
let finish = false;

let mode;
let current_animals = [];
let cute;
let angry;

let secounds = 0;
let score = 0;
const colors = [
  "#f037a5", // Hot pink
  "#ffd700", // Gold
  "red", // Royal blue
  "#28a745", // Forest green
  "#ffc107", // Orange
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
    enter: "assets/audio/cute_cat3.wav",
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

    setInterval(createAnimal, 700);
    startGame();
  });
});

function startGame() {
  title.style.display = `none`;
  if(finish==true){
return;}
setInterval(increaseTime, 1000);

}

function increaseTime() {
  if (finish === true) {
    timeEl.innerHTML = `Time: ${00}:${00}`;
    return;
  }
  let m = Math.floor(secounds / 60);
  let s = secounds % 60;
  m = m < 10 ? `0${m}` : m;
  s = s < 10 ? `0${s}` : s;
  timeEl.innerHTML = `Time: ${m}:${s}`;

  secounds++;
}

//create animal on the screen
function createAnimal() {

  const screenMax= document.querySelectorAll(".insect");
  if(screenMax.length>=50){
    return;
  }

  if (finish === true) {
    return;
  }
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

  // Set random speed and direction

  // Set random speed and direction
  let speedX = Math.random() * 5 - 2.5; // Random speed between -2.5 and 2.5
  let speedY = Math.random() * 5 - 2.5; //

  function moveInsect() {
    // Get container dimensions
    const containerWidth = game_container.clientWidth;
    const containerHeight = game_container.clientHeight;

    // Get insect dimensions (consider margins/padding)
    const insectWidth = insect.clientWidth;
    const insectHeight = insect.clientHeight;
    // Random speed between -2.5 and 2.5

    // Update position while preventing edge overflow
    let newX = insect.offsetLeft + speedX;
    let newY = insect.offsetTop + speedY;

    // Bounce off edges (adjust padding as needed)
    if (newX + insectWidth >= containerWidth - 10) {
      speedX = -speedX;
      newX = containerWidth - insectWidth - 10;
    } else if (newX <= 10) {
      speedX = -speedX;
      newX = 10;
    }

    if (newY + insectHeight >= containerHeight - 10) {
      speedY = -speedY;
      newY = containerHeight - insectHeight - 10;
    } else if (newY <= 10) {
      speedY = -speedY;
      newY = 10;
    }

    insect.style.left = `${newX}px`;
    insect.style.top = `${newY}px`;
  }
  if (score > 1) {

    setInterval(moveInsect, 30); // Move every second
  }

  insect.addEventListener("mouseenter", catchAnimal);

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

function catchAnimal() {
  if (finish === true) {
    return;
  }
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
  // setTimeout(createAnimal, 1500);
  // setTimeout(createAnimal, 7000);
}

function increaseScore() {
  score++;
  
  if (score % 10 === 0) { // Check if score is a multiple of 10
    createGiveUp();
  }

  if (score > 15) {
    messageEl.classList.add("visible");
  }
  if (score > 30) {
    messageEl.innerHTML = `Just Leave us alone man, what the hell?`;
  }

  if (score > 50) {
    messageEl.innerHTML = `Alright You have done it, We WILL SHOW MEW MERCY `;
  }

  if (score > 90 && score < 200) {
    messageEl.innerHTML = `More Than 100 Kittens Are DEAD, DEAD you son of mew`;
    createAnimal();
  }

  if (score > 200) {
    messageEl.innerHTML = `Alright you win we Give Up `;

  }

  if (score > 250) {
    messageEl.innerHTML = `SIKE, We will never give up`;
    createAnimal();
  }
  scoreEl.innerHTML = `Score: ${score}`;
}

//cancel space

document.addEventListener("keydown", function (event) {
  if (event.key === " " || event.key === 32) {
    event.preventDefault();
    // Optional: Add your custom logic here to handle space key press on the div
  }
});

function createGiveUp() {
  const giveUp = document.createElement("div");
  // const animal= cats[Math.floor(Math.random() * cats.length)]
  const animal =
    current_animals[Math.floor(Math.random() * current_animals.length)];

  cute = document.createElement("audio");
  angry = document.createElement("audio");

  cute.src = animal.enter;
  angry.src = animal.exit;

  giveUp.classList.add("give-up");
  const { x, y } = getRandomLocation();

  giveUp.style.top = `${y}px`;
  giveUp.style.left = `${x}px`;
  giveUp.innerHTML = `GIVE UP`;

  // Set random speed and direction

  // Set random speed and direction
  let speedX = Math.random() * 5 - 2.5; // Random speed between -2.5 and 2.5
  let speedY = Math.random() * 5 - 2.5; //

  function moveGiveUp() {
    // Get container dimensions
    const containerWidth = game_container.clientWidth;
    const containerHeight = game_container.clientHeight;

    // Get insect dimensions (consider margins/padding)
    const giveUpWidth = giveUp.clientWidth;
    const giveUpHeight = giveUp.clientHeight;
    // Random speed between -2.5 and 2.5

    // Update position while preventing edge overflow
    let newX = giveUp.offsetLeft + speedX;
    let newY = giveUp.offsetTop + speedY;

    // Bounce off edges (adjust padding as needed)
    if (newX + giveUpWidth >= containerWidth - 10) {
      speedX = -speedX;
      newX = containerWidth - giveUpWidth - 10;
    } else if (newX <= 10) {
      speedX = -speedX;
      newX = 10;
    }

    if (newY + giveUpHeight >= containerHeight - 10) {
      speedY = -speedY;
      newY = containerHeight - giveUpHeight - 10;
    } else if (newY <= 10) {
      speedY = -speedY;
      newY = 10;
    }

    giveUp.style.left = `${newX}px`;
    giveUp.style.top = `${newY}px`;
  }
  giveUp.addEventListener("mouseenter", stopGame);

  setInterval(moveGiveUp, 50); // Move every second

  game_container.appendChild(giveUp);
}

function stopGame() {
  finish = true;
  messageEl.classList.add("visible");

  score = 0;
  secounds = 0;
  messageEl.innerHTML = `You Lose, as expected`;

}
