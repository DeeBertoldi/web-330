/*
  Pragmatic JavaScript
  Chapter 3
  Programming Assignment

  Author:
  Date:
  Filename: chefs.js
*/

"use strict";

// TODO: Define an array of chef objects
let chefs = [
  // Each chef object should have a name, specialty, weakness, and restaurantLocation
  {
    name: "Catherine",
    specialty: "Italian Cuisine",
    weakness: "Adds too much salt",
    restaurantLocation: "New York"
  },
  {
    name: "Chef Miguel",
    specialty: "Mexican Food",
    weakness: "Burns the garlic",
    restaurantLocation: "Los Angeles"
  },
  {
    name: "Chef Bruno",
    specialty: "French Pastries",
    weakness: "Overbakes croissants",
    restaurantLocation: "New Orleans"
  }
];


// TODO: Define a function to retrieve the first chef's information
  // This function should return a promise that resolves with the chef's information after a delay

// Retrieve Chef 1
  function retrieveChef1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.2) { // 80% success
        resolve(chefs[0]);  // Catherine
      } else {
        reject("Failed - Catherine's data could not be retrieved.");
      }
    }, 2000);
  });
}

// Chef 2
function retrieveChef2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.3) { // 70% success
        resolve(chefs[1]);  // Miguel
      } else {
        reject("Failed - Chef Miguel's data could not be retrieved.");
      }
    }, 3000);
  });
}

// Chef 3
function retrieveChef3() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.4) { // 60% success
        resolve(chefs[2]);  // Bruno
      } else {
        reject("Failed - Chef Bruno's data could not be retrieved.");
      }
    }, 4000);
  });
}



// TODO: Use Promise.allSettled to retrieve all chefs' information and update the webpage accordingly

Promise.allSettled([retrieveChef1(), retrieveChef2(), retrieveChef3()])
  .then((results) => {

    // Chefs elements
    const chefSections = [
      document.getElementById("chef1"),
      document.getElementById("chef2"),
      document.getElementById("chef3")
    ];

    // Loop through results
    results.forEach((result, index) => {
      const section = chefSections[index];

      if (result.status === "fulfilled") {
        const chef = result.value;

        section.innerHTML = `
          <h2>${chef.name}</h2>
          <p><strong>Specialty:</strong> ${chef.specialty}</p>
          <p><strong>Weakness:</strong> ${chef.weakness}</p>
          <p><strong>Restaurant Location:</strong> ${chef.restaurantLocation}</p>
        `;
      } else {
        section.innerHTML = `
          <h2>Error</h2>
          <p style="color: red;">${result.reason}</p>
        `;
      }
    });

  })
  .catch((err) => {
    console.error("Unexpected error:", err);
  });
