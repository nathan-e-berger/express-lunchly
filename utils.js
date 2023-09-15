"use strict";

/** capitalizeFirstLetter: given a word of any capitalization, return the
word with only the first letter capitalized. */
function capitalizeFirst(word) {
  let newWord = word.toLowerCase();

  return newWord.charAt(0).toUpperCase() + newWord.slice(1);
}

module.exports = capitalizeFirst;