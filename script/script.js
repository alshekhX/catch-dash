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
const header = document.querySelector(".title-pos");

const overMessage = document.getElementById("over");
const resultMessage = document.getElementById("result-message");
const supportButton = document.querySelector(".support-button");


const restartBtn = document.getElementById("restart");
const returnHomeBtn = document.getElementById("return");
let timeIntervail;
let animalIntervel;

const catDialogs=[

  {title:"You will never catch us",min:15 ,max:30},
  {title:"Just leave us alone! What the heck is wrong with you?  ",min:25 ,max:50},
  {title:"Alright, you've done it! We will show you meow mercy.  ",min:50 ,max:100},
  {title:"So how are you going to feed the 100+ cats you just catch?  ",min:100 ,max:150},
  {title:"Alright, alright, we give up. Now touch GIVE UP to get your trophy  ",min:150 ,max:200},
  {title:"SIKE! We will never give up.  ",min:250 ,max:300},
  {title:"Soon human, your screams will be the soundtrack to our victory dance, meow meow meow meow  ",min:300 ,max:350},


]


const dogDialogs=[

  {title:"You will never catch us",min:15 ,max:30},
  {title:"Dogs are humans' best friends, not you though.  ",min:25 ,max:50},
  {title:"Woof Woof Grrrrrrrrrrrrrrrrrrrrrrr  ",min:50 ,max:100},
  {title:"So how are you going to feed the 100+ dogs you just catch?  ",min:100 ,max:150},
  {title:"Alright, alright, we give up. Now touch GIVE UP to get your trophy  ",min:150 ,max:200},
  {title:"SIKE! We will never give up.  ",min:250 ,max:300},
  {title:"Soon human, Your screams will be our anthem. Gurrrrr  ",min:300 ,max:350},


]



let finish = false;

let mode;
let current_animals = [];
let cute;
let angry;
let scream;


let secounds = 0;
let score = 0;
const colors = [
  "#f037a5", // Hot pink
  "#ffd700", // Gold
  "red", // Royal blue
  "#28a745", // Forest green
  "#ffc107", // Orange
];

screamUrl="assets/audio/scream.mp3";

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

start_btn.addEventListener("click", () => {
  screens[0].classList.add("up");
});



start_btn.addEventListener("touchstart", () => {
  screens[0].classList.add("up");
});

choose_insect_btns.forEach((button) => {

  button.addEventListener("click", () => {
    mode = button.getAttribute("id");
    current_animals = mode == "cats" ? cats : dogs;

    screens[1].classList.add("up");
    finish=false;

animalIntervel= setInterval(createAnimal, 700);
    startGame();
  });

  
  button.addEventListener("touchstart", () => {
    mode = button.getAttribute("id");
    current_animals = mode == "cats" ? cats : dogs;

    screens[1].classList.add("up");
    finish=false;

animalIntervel= setInterval(createAnimal, 700);
    startGame();
  });
});

function startGame() {
  header.classList.add('hide');
  if (finish == true) {
    return;
  }
 timeIntervail= setInterval(increaseTime, 1000);
}

function increaseTime() {
  if (finish === true) {
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
  const screenMax = document.querySelectorAll(".insect");
  if (screenMax.length >= 50) {
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

  var screenWidth = window.innerWidth;
  console.log("Window width:", screenWidth);


  insect.classList.add("insect");
  const { x, y } = getRandomLocation();

  insect.style.top = `${y}px`;
  insect.style.left = `${x}px`;
  insect.innerHTML = `<img src="${animal.img}" alt="${
    selected_insect.alt
  }" style="transform: rotate(${Math.random() * 360}deg); width:${screenWidth>500?'100px':'70px'} ";
  height:${screenWidth>500?'100px':'70px'}
  
  
  
  
  />`;

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
  if (score > 30) {
    setInterval(moveInsect, 30); // Move every second
  }

  insect.addEventListener("touchstart", catchAnimal);
  insect.addEventListener("mouseover", catchAnimal);


  game_container.appendChild(insect);

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
  event.preventDefault()
  if (finish === true) {
    return;
  }
  increaseScore();
  this.classList.add("caught");
  angry.play();

  setTimeout(() => this.remove(), 5000);

  addInsect();
}
function addInsect() {
  // setTimeout(createAnimal, 1500);
  // setTimeout(createAnimal, 7000);
}

function increaseScore() {
  const dialogs= mode == "cats" ? catDialogs : dogDialogs;

  score++;

  if (score % 10 === 0) {
    // Check if score is a multiple of 10
    createGiveUp();
  }


dialogs.map((dialog)=>{

if (score>=dialog.min&&dialog.max>=score) {
  
  messageEl.innerHTML = dialog.title;

  messageEl.classList.add("visible");
  
}



})

  // if (score > 15) {

  //   messageEl.innerHTML = `YOU WILL NEVER CATCH US`;

  //   messageEl.classList.add("visible");
  // }
  // if (score > 30) {
  //   messageEl.innerHTML = `Just Leave us alone man, what the hell?`;
  // }

  // if (score > 50) {
    
  // if (score % 6 === 0) {
  //   // Check if score is a multiple of 10
  //   createAnimal();
  // }
  //   messageEl.innerHTML = `Alright You have done it, We WILL SHOW MEW MERCY `;
  // }

  // if (score > 90 && score < 200) {
  //   messageEl.innerHTML = `More Than 100 Kittens Are DEAD, DEAD you son of mew`;
  // }

  // if (score > 200) {
  //   messageEl.innerHTML = `Alright you win we Give Up `;
  // }

  // if (score > 250) {
  //   messageEl.innerHTML = `SIKE, We will never give up`;}

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
  let speedX = Math.random() * 10 - 5; // Random speed between -2.5 and 2.5
  let speedY = Math.random() * 10 - 4; //

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
  giveUp.addEventListener("touchstart", stopGame);


  setInterval(moveGiveUp, 30); // Move every second

  game_container.appendChild(giveUp);
}

function stopGame() {
  scream = document.createElement("audio");
  scream.src=screamUrl;

  scream.play()

  if (finish == true) {
    return;
  }
  finish = true;

  messageEl.classList.remove("visible");
  resultMessage.innerHTML = ` You Catch ${score} in ${timeEl.innerHTML.slice(
    5,
    timeEl.innerHTML.length
  )}
  
  `;
  supportButton.classList.add("support-visable")

  overMessage.classList.add("over-message");

  score = 0;
  secounds = 0;
}

function restartGame() {

  finish = false;
  timeEl.innerHTML = `Time: ${00}:${00}`;
  scoreEl.innerHTML = `Score: 0`;


  removeGame();
  supportButton.classList.remove("support-visable")

  overMessage.classList.remove("over-message");

}


function returnHome() {
  stopIntervals();

  timeEl.innerHTML = `Time: ${00}:${00}`;
  scoreEl.innerHTML = `Score: 0`;

  removeAllElementsByClass("insect");
  removeAllElementsByClass("give-up");
  supportButton.classList.remove("support-visable")

  overMessage.classList.remove("over-message");
  header.classList.remove('hide');

  screens[1].classList.remove("up");
  screens[0].classList.remove("up");



}

restartBtn.addEventListener("click", restartGame);
restartBtn.addEventListener("touchstart", restartGame);



returnHomeBtn.addEventListener("click", returnHome);
returnHomeBtn.addEventListener("touchstart", returnHome);



function removeGame() {
  removeAllElementsByClass("insect");
  removeAllElementsByClass("give-up");
}
function removeAllElementsByClass(className) {
  const elements = document.querySelectorAll(`.${className}`);
  elements.forEach((element) => element.remove());
}

function stopIntervals() {
  clearInterval(timeIntervail);
  clearInterval(animalIntervel);
  
}
