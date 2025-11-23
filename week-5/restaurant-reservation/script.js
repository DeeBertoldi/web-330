/*
  Pragmatic JavaScript
  Chapter 2
  Programming Assignment

  Author: Daniella Bertoldi
  Date: 11/22/25
  Filename: script.js
*/

"use strict";

// Create an in-memory object array for each table in the restaurant
// (Each table is an object with 3 properties.)
let tables = [
  { tableNumber: 10, capacity: 2, isReserved: false },
  { tableNumber: 11, capacity: 2, isReserved: false },
  { tableNumber: 12, capacity: 4, isReserved: false },
  { tableNumber: 13, capacity: 4, isReserved: false },
  { tableNumber: 14, capacity: 5, isReserved: false },
  { tableNumber: 15, capacity: 5, isReserved: false },
  { tableNumber: 16, capacity: 5, isReserved: false },
  { tableNumber: 17, capacity: 10, isReserved: false }
];

// Create a function reserveTable with three formal parameters:
// table number, a callback function, and time in milliseconds.
function reserveTable(tableNumber, callback, time) {

  // Check if the table exists in the array
  const table = tables.find(t => t.tableNumber === tableNumber);

  // If the table is not found, call callback immediately with error
  if (!table) {
    callback(`Error: Table ${tableNumber} does not exist.`);
    return;
  }

  // If the table is already reserved, call callback immediately with error
  if (table.isReserved) {
    callback(`Sorry, Table ${tableNumber} is already reserved.`);
    return;
  }

  // If available, reserve it
  table.isReserved = true;

  // Use setTimeout to simulate waiting time, then call callback with success
  setTimeout(() => {
    callback(`Success! Table ${tableNumber} has been reserved.`);
  }, time);
}

// When the form is submitted, call the reserveTable function
document
    .getElementById("reservationForm")
    .addEventListener("submit", function (event) {
    event.preventDefault(); 

    const name = document.getElementById("name").value.trim();
    const tableNumber = parseInt(document.getElementById("tableNumber").value);
    const messageEl = document.getElementById("message");

    // basic input check
    if (!name || !tableNumber) {
      messageEl.textContent = "Please enter your name and a valid table number.";
      messageEl.className = "error";
      return;
    }

    // show waiting message while async runs
    messageEl.textContent = `Making reservation for ${name}...`;
    messageEl.className = "pending";

    // Call reserveTable with a callback that updates the webpage
    reserveTable(tableNumber, function (msg) {

      // choose style based on success or error message
      if (msg.toLowerCase().includes("success")) {
        messageEl.className = "success";
      } else {
        messageEl.className = "error";
      }

      messageEl.textContent = `${name}: ${msg}`;
    }, 3000); // time in milliseconds
  });