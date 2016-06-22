// Write a function letterCount() that takes a
// string and returns an object with the count
// of each letter that is in the string.
//
// An example:
//
// letterCount("hello world")
//
// --> {
//      h: 1,
//      e: 1,
//      l: 3,
//      o: 2,
//      w: 1,
//      r: 1,
//      d: 1
// }
//
// Note that the space is not counted. All
// letters should also be converted to lower
// case when counting them.

function letterCount(sentence){

  // Exit early if we don't get a sentence
  if(typeof sentence === 'undefined') {
    return {};
  }
  
  // remove non-alpha characters, convert to lower
  // split it into an array, and sort the array
  // alphabetically
  
  var alphaCharacters = sentence
    .replace(/\W+/g, "")
    .toLowerCase()
    .split("")
    .sort();

  var results = {};
  var lastLetter;
  var runningLetterCount = 0;

  // Loop through all the characters
  // This implementation assumes the array is
  // sorted alphabetically 
  for (var i=0; i < alphaCharacters.length; i++ ) {

    // Have we reached a new character?
    if(alphaCharacters[i] === lastLetter) {

      // 
      runningLetterCount++;      

    } else { // we're on a new character

      if(typeof lastLetter !== 'undefined') {
        // Don't add 'undefined' to the array
        results[lastLetter] = runningLetterCount; 
      }

      // Reset the running letter count
      runningLetterCount = 1;
    }

    // set the last letter to the current letter
    // so that the next time through, we're ready to
    // determine if we've reached a new character 
    lastLetter = alphaCharacters[i];

  }
  console.log(results);
  return results;

}

// tests

console.assert(letterCount("aBcabcaBcdefab c a oo ija ;a ;skmdals kn").b === 4)
console.assert(letterCount().z === undefined)