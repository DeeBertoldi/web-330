"use strict";
/*    JavaScript 7th Edition
      Chapter 8
      Project 08-01

      Project to create a timer object
      Author: D Bertoldi
      Date:   10/25/2025

      Filename: project08-01.js
*/

/*--------------- Object Code --------------------*/
function Timer(minutes, seconds) {
  this.minutes = minutes;
  this.seconds = seconds;
  this.timeID = null; 
}

Timer.prototype.runPause = function (times, minBox, secBox) {
  if (times.timeID) { 
    window.clearInterval(times.timeID);
    times.timeID = null;
  } else {
    times.timeID = window.setInterval(countdown, 1000);
  }

  function countdown() {
    if (times.seconds > 0) {
      times.seconds--;
    } else if (times.minutes > 0) {
      times.minutes--;
      times.seconds = 59;
    } else {
      window.clearInterval(times.timeID);
      times.timeID = null;
    }

    minBox.value = times.minutes;
    secBox.value = (times.seconds < 10 ? "0" : "") + times.seconds;
  }
};

/*--------------- Interface Code -----------------*/

/* Interface Objects */
let minBox = document.getElementById("minutesBox");
let secBox = document.getElementById("secondsBox");
let runPauseTimer = document.getElementById("runPauseButton");

/* Step 7–10 */

const myTimer = new Timer(minBox.value, secBox.value);

minBox.onchange = function () {
  myTimer.minutes = Number(minBox.value);
};
secBox.onchange = function () {
  myTimer.seconds = Number(secBox.value);
};

runPauseTimer.onclick = function () {
  myTimer.runPause(myTimer, minBox, secBox);
};



