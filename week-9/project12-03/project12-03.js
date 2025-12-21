"use strict";
/*    JavaScript 7th Edition
      Chapter 12
      Project 12-03

      Project to show a recipe with expanding/contracting content
      Author: Daniella
      Date:   12/20/25

      Filename: project12-03.js
*/

$(function () {
  $("article > h2").click(function (e) {

    let heading = $(e.target);
    let list = heading.next();
    let headingImage = heading.children("img");

list.slideToggle(500);

let src = headingImage.attr("src");
if (src === "plus.png") {
  headingImage.attr("src", "minus.png");
} else {
  headingImage.attr("src", "plus.png");
}

  });
});