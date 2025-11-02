/*
  Pragmatic JavaScript
  Chapter 1
  Programming Assignment

  Author: D. Bertoldi
  Date: 
  Filename: script.js
*/

"use strict";

// ===== Function that creates a new character  =====
function createCharacter(name, gender, characterClass) {
  // TODO: Implement this function
  return {
    getName: function() {
      return name;
    },
    getGender: function() {
      return gender;
    },
    getClass: function() {
      return characterClass;
    }
  };
}

// ===== Event listener for the "Generate Hero" button =====
document.getElementById("generateHero").addEventListener("click", function(e) {
  e.preventDefault();

  // TODO: Get form values
  let name = document.getElementById("heroName").value;
  let gender = document.getElementById("heroGender").value;
  let characterClass = document.getElementById("heroClass").value;

  // TODO: Create character
  const myCharacter = createCharacter(name, gender, characterClass);

  // TODO: Display character information
  document.getElementById("characterOutput").innerHTML = `
    <div class="output-card">
      <h3>Your Character</h3>
      <p><strong>Name:</strong> ${myCharacter.getName()}</p>
      <p><strong>Gender:</strong> ${myCharacter.getGender()}</p>
      <p><strong>Class:</strong> ${myCharacter.getClass()}</p>
    </div>
  `;
});
