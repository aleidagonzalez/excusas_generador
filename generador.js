/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let who = ["The dog", "My grandma", "His turtle", "My bird"];
let action = ["ate", "peed", "crushed", "broke"];
let what = ["my homework", "the keys", "the car"];
let when = [ "before the class","right on time","when I finished", "during my lunch", "while I was praying"];
 
  
window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
  let whoWord = who[Math.floor(Math.random() * who.length)];
  let actionWord = action[Math.floor(Math.random() * action.length)];
  let whatWord = what[Math.floor(Math.random() * what.length)];

  let whenWord = when[Math.floor(Math.random() * when.length)];

  let excuseMessage =
    whoWord + " " + actionWord + " " + whatWord + " " + whenWord + ".";

  let excuseContainer = document.querySelector("#excuse"); // Equivalente : document.getElementById("excuse");
  excuseContainer.innerText = excuseMessage;
};

