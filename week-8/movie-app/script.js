/*
  Pragmatic JavaScript
  Chapter 4
  Programming Assignment

  Author: Daniella 
  Date:
  Filename: script.js
*/

"use strict";

const movies = [
  // Add your movie objects here
  {
    title: "Inception",
    director: "Christopher Nolan",
    year: 2010,
    synopsis: "A thief enters people's dreams to steal secrets."
  },
  {
    title: "The Matrix",
    director: "The Wachowskis",
    year: 1999,
    synopsis: "A hacker discovers the truth about reality."
  },
  {
    title: "Interstellar",
    director: "Christopher Nolan",
    year: 2014,
    synopsis: "Explorers travel through a wormhole in space."
  }
];

function fetchMovie(title) {
  // Implement this function
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const movie = movies.find(
        (m) => m.title.toLowerCase() === title.toLowerCase()
      );

      if (movie) {
        resolve(movie);
      } else {
        reject("Movie not found.");
      }
    }, 1000);
  });
}

document
  .getElementById("movie-form")
  .addEventListener("submit", async (event) => {
    // Implement this function
    event.preventDefault();

    const titleInput = document.getElementById("title-input").value;
    const errorMessage = document.getElementById("error-message");

    // Clear previous error message
    errorMessage.textContent = "";

    try {
      const movie = await fetchMovie(titleInput);

      document.getElementById("movie-title").textContent = movie.title;
      document.getElementById("movie-director").textContent =
        "Director: " + movie.director;
      document.getElementById("movie-year").textContent =
        "Release Year: " + movie.year;
      document.getElementById("movie-synopsis").textContent =
        movie.synopsis;
    } catch (error) {
      errorMessage.textContent = error;

      // Clear movie info if an error occurs
      document.getElementById("movie-title").textContent = "";
      document.getElementById("movie-director").textContent = "";
      document.getElementById("movie-year").textContent = "";
      document.getElementById("movie-synopsis").textContent = "";
    }
  });
