import { screens,choose_animal_btns,start_btn,game_container,timeEl,scoreEl,

  messageEl,copyRight, hint2, popupText, soundtrack, title,header,overMessage,resultMessage,supportButton,restartBtn,returnHomeBtn
,catDialogs,dogDialogs,colors,cats,dogs,screamUrl
} from "./consts.js";

import{ getRandomLocation} from './utils.js'


let timeIntervail;
let animalIntervel;
let mode;
let cute;
let angry;
let scream;
let current_animals = [];
let finish = false;
let secounds = 0;
let score = 0;
let selected_animal = {};



function popUpText() {
  // Play the sound

  // Simulate a "pop" effect (optional)
  popupText.classList.add("pop"); // Add a CSS class for styling
  hint2.classList.add("pop"); // Add a CSS class for styling

  // Remove the "pop" effect after a delay (adjust as needed)
  setTimeout(function() {
    popupText.classList.remove("pop");
    hint2.classList.remove("pop"); // Add a CSS class for styling
    // Remove the CSS class
  }, 200); // Remove pop effect after 0.2 seconds
}

// Set the interval to repeat the pop-up (adjust as needed)


window.onload = function() {
  soundtrack.loop=true;

  setInterval(popUpText, 550); // Repeat every 1 second
  };


//cancel space

document.addEventListener("keydown", function (event) {
  if (event.key === " " || event.key === 32) {
    event.preventDefault();
    // Optional: Add your custom logic here to handle space key press on the div
  }
});

//logo fn
setInterval(changeColor, 500);

//logo colors
function changeColor() {
  title.style.color = colors[Math.floor(Math.random() * colors.length)];
}

start_btn.addEventListener("click", () => {


  soundtrack.play();
  screens[0].classList.add("up");
});

choose_animal_btns.forEach((button) => {
  button.addEventListener("click", () => {
    mode = button.getAttribute("id");
    current_animals = mode == "cats" ? cats : dogs;

    screens[1].classList.add("up");
    finish = false;
    // soundtrack.pause()
    soundtrack.volume = 0.2; // Sets the volume to half (50%)



    animalIntervel = setInterval(createAnimal, 700);
    startGame();
  });
});

function startGame() {
  header.classList.add("hide");
  copyRight.classList.add("hide");
  if (finish == true) {
    return;
  }
  timeIntervail = setInterval(increaseTime, 1000);
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
  const screenMax = document.querySelectorAll(".animal");
  if (screenMax.length >= 50) {
    return;
  }

  if (finish === true) {
    return;
  }
  const animal = document.createElement("div");
  // const animal= cats[Math.floor(Math.random() * cats.length)]
  const animalSelected =
    current_animals[Math.floor(Math.random() * current_animals.length)];

  cute = document.createElement("audio");
  angry = document.createElement("audio");

  cute.src = animalSelected.enter;
  angry.src = animalSelected.exit;

  var screenWidth = window.innerWidth;

  animal.classList.add("animal");
  const { x, y } = getRandomLocation();

  animal.style.top = `${y}px`;
  animal.style.left = `${x}px`;
  animal.innerHTML = `<img src="${animalSelected.img}" alt="${
    selected_animal.alt
  }" style="transform: rotate(${Math.random() * 360}deg); width:${
    screenWidth > 500 ? "100px" : "70px"
  } ";
  height:${screenWidth > 500 ? "100px" : "70px"}
  
  
  
  
  />`;

  // Set random speed and direction

  // Set random speed and direction
  let speedX = Math.random() * 7 - 3.5; // Random speed between -2.5 and 2.5
  let speedY = Math.random() * 7 - 3.5; //

  function moveanimal() {
    // Get container dimensions
    const containerWidth = game_container.clientWidth;
    const containerHeight = game_container.clientHeight;

    // Get animal dimensions (consider margins/padding)
    const animalWidth = animal.clientWidth;
    const animalHeight = animal.clientHeight;
    // Random speed between -2.5 and 2.5

    // Update position while preventing edge overflow
    let newX = animal.offsetLeft + speedX;
    let newY = animal.offsetTop + speedY;

    // Bounce off edges (adjust padding as needed)
    if (newX + animalWidth >= containerWidth - 10) {
      speedX = -speedX;
      newX = containerWidth - animalWidth - 10;
    } else if (newX <= 10) {
      speedX = -speedX;
      newX = 10;
    }

    if (newY + animalHeight >= containerHeight - 10) {
      speedY = -speedY;
      newY = containerHeight - animalHeight - 10;
    } else if (newY <= 10) {
      speedY = -speedY;
      newY = 10;
    }

    animal.style.left = `${newX}px`;
    animal.style.top = `${newY}px`;
  }
  if (score > 30) {
    setInterval(moveanimal, 30); // Move every second
  }

  animal.addEventListener("touchstart", catchAnimal);
  animal.addEventListener("mouseover", catchAnimal);

  game_container.appendChild(animal);
  cute.volume=0.7;

  cute.play();
}




function catchAnimal() {
  event.preventDefault();
  if (finish === true) {
    return;
  }
  increaseScore();
  this.classList.add("caught");
  angry.volume=0.7;

  angry.play();

  setTimeout(() => this.remove(), 5000);

  // addanimal();
}

function increaseScore() {
  const dialogs = mode == "cats" ? catDialogs : dogDialogs;

  score++;

  if (score % 10 === 0) {
    // Check if score is a multiple of 10
    createGiveUp();
  }

  dialogs.map((dialog) => {
    if (score >= dialog.min && dialog.max >= score) {
      messageEl.innerHTML = dialog.title;

      messageEl.classList.add("visible");
    }
  });
  scoreEl.innerHTML = `Score: ${score}`;
}



//give up
function createGiveUp() {
  const screenMax = document.querySelectorAll(".give-up");
  if (screenMax.length >= 40) {
    return;
  }
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

    // Get animal dimensions (consider margins/padding)
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
  scream.src = screamUrl;
  scream.play();
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
  supportButton.classList.add("support-visable");
  overMessage.classList.add("over-message");
  score = 0;
  secounds = 0;
}

restartBtn.addEventListener("click", restartGame);
returnHomeBtn.addEventListener("click", returnHome);

// restart the game
function restartGame() {
  finish = false;
  timeEl.innerHTML = `Time: ${0}:${0}`;
  scoreEl.innerHTML = `Score: 0`;
  removeGame();
  supportButton.classList.remove("support-visable");
  overMessage.classList.remove("over-message");
}

// return to the homescreen
function returnHome() {
  soundtrack.volume=.7;
  soundtrack.play()

  stopIntervals();
  timeEl.innerHTML = `Time: ${0}:${0}`;
  scoreEl.innerHTML = `Score: 0`;
  removeAllElementsByClass("animal");
  removeAllElementsByClass("give-up");
  supportButton.classList.remove("support-visable");
  overMessage.classList.remove("over-message");
  header.classList.remove("hide");
  copyRight.classList.remove("hide");

  screens[1].classList.remove("up");
  screens[0].classList.remove("up");
}

//clear the game
function removeGame() {
  removeAllElementsByClass("animal");
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
