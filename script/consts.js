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

export const catDialogs = [
  { title: "You will never catch us", min: 15, max: 30 },
  {
    title: "Just leave us alone! What the heck is wrong with you?  ",
    min: 25,
    max: 50,
  },
  {
    title: "Alright, you've done it! We will show you meow mercy.  ",
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
  { title: "SIKE! We will never give up.  ", min: 250, max: 300 },
  {
    title:
      "Soon human, your screams will be the soundtrack to our victory dance, meow meow meow meow  ",
    min: 300,
    max: 350,
  },
];

export const dogDialogs = [
  { title: "You will never catch us", min: 15, max: 30 },
  {
    title: "Dogs are humans' best friends, not you though.  ",
    min: 25,
    max: 50,
  },
  { title: "Woof Woof Grrrrrrrrrrrrrrrrrrrrrrr  ", min: 50, max: 100 },
  {
    title: "So how are you going to feed the 100+ dogs you just catch?  ",
    min: 100,
    max: 150,
  },
  {
    title:
      "Alright, alright, we give up. Now touch GIVE UP to get your trophy  ",
    min: 150,
    max: 200,
  },
  { title: "SIKE! We will never give up.  ", min: 250, max: 300 },
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

export const dogs = [
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

export const screamUrl = "assets/audio/scream.mp3";


