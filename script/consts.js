export const screens = document.querySelectorAll(".screen");
export const choose_animal_btns = document.querySelectorAll(".choose-animal-btn");
export const start_btn = document.getElementById("start-btn");
export const game_container = document.getElementById("game-container");
export const timeEl = document.getElementById("time");
export const scoreEl = document.getElementById("score");
export const messageEl = document.getElementById("message");
export const title = document.querySelector(".the-flow-zone");
export const header = document.querySelector(".the-flow-zone-pos");
export const overMessage = document.getElementById("over");
export const resultMessage = document.getElementById("result-message");
export const supportButton = document.querySelector(".support-button");
export const restartBtn = document.getElementById("restart");
export const returnHomeBtn = document.getElementById("return");
export const soundtrack = document.getElementById("soundtrack");
export const popupText = document.querySelector(".popup-text");
export const hint2 = document.querySelector(".hint2");
export const copyRight = document.querySelector(".copy-right");

export const catDialogs = [
  { title: "You will never catch us all", min: 15, max: 30 },
  {
    title: "And we thought we were the only Pussies  ",
    min: 25,
    max: 50,
  },
  {
    title: "If you love your family, touch GIVE UP.",
    min: 50,
    max: 100,
  },
  {
    title: "So how are you going to feed the 100+ cats you just catch?  ",
    min: 100,
    max: 150,
  },
  {
    title:
      "Alright, alright, we give up. Now touch GIVE UP to get your trophy  ",
    min: 150,
    max: 200,
  },
  { title: "Your screen is ours, hairless one! Prepare for furball fury.  ", min: 250, max: 300 },
  {
    title:
      "Soon human, your screams will be the soundtrack to our victory dance, Meow Meow Meow Meow  ",
    min: 300,
    max: 350,
  },
];

export const dogDialogs = [
  { title: "You will never catch us all", min: 15, max: 30 },
  {
    title: "Dogs are humans' best friends, not you though.  ",
    min: 25,
    max: 50,
  },
  { title: "Every dog you catch shorten your life span, Wof Wof Wof Wof. ", min: 50, max: 100 },
  {
    title: "So how are you going to feed the 100+ dogs you just catch?.  ",
    min: 100,
    max: 150,
  },
  {
    title:
      "Alright, alright, we give up. Now touch GIVE UP to get your trophy. ",
    min: 150,
    max: 200,
  },
  { title: "This screen is ours, two-legs! We may be strays, but we are the captains now ", min: 250, max: 300 },
  {
    title: "Soon human, Your screams will be our anthem. Gurrrrr  ",
    min: 300,
    max: 350,
  },
];

export const colors = [
  "#f037a5", // Hot pink
  "#ffd700", // Gold
  "red", // Royal blue
  "#28a745", // Forest green
  "#ffc107", // Orange
];

export const cats = [
  {
    enter: "assets/audio/cats/cute_cat.mp3",
    exit: "assets/audio/cats/angry_cat.wav",
    img: "assets/images/cat.png",
  },
  {
    enter: "assets/audio/cats/cute_cat2.wav",
    exit: "assets/audio/cats/angry_cat.wav",
    img: "assets/images/cat2.png",
  },
  {
    enter: "assets/audio/cats/cute_cat3.wav",
    exit: "assets/audio/cats/angry_cat3.wav",
    img: "assets/images/cat3.png",
  },

  {
    enter: "assets/audio/cats/cute_cat4.mp3",
    exit: "assets/audio/cats/angry_cat2.wav",
    img: "assets/images/cat5.png",
  },


  {
    enter: "assets/audio/cats/cute_cat5.mp3",
    exit: "assets/audio/cats/angry_cat3.wav",
    img: "assets/images/cat6.png",
  },
 
];

export const dogs = [
  {
    enter: "assets/audio/dogs/cute_dog.wav",
    exit: "assets/audio/dogs/angry_dog.wav",
    img: "assets/images/dog4.png",
  },

  {
    enter: "assets/audio/dogs/cute_dog5.wav",
    exit: "assets/audio/dogs/angry_dog4.mp3",
    img: "assets/images/dog5.png",
  },

  {
    enter: "assets/audio/dogs/cute_dog2.wav",
    exit: "assets/audio/dogs/angry_dog4.mp3",
    img: "assets/images/dog3.png",
  },

  
   {
    enter: "assets/audio/dogs/cute_dog4.wav",
    exit: "assets/audio/dogs/angry_dog2.mp3",
    img: "assets/images/dog2.png",
  },

  {
    enter: "assets/audio/dogs/cute_dog3.wav",
    exit: "assets/audio/dogs/angry_dog3.mp3",
    img: "assets/images/dog.png",
  },

  
];

export const screamUrl = "assets/audio/scream.mp3";


