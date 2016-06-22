// # tweeter


// change one line of js, subsitute "maps" for "naps"
function naps(tweeter){ // var tweeter;

  // var modifiedTweeter = tweeter.replace('maps', 'naps'); 
  // return modifiedTweeter;
  return tweeter.replace('maps', 'naps');
}
console.assert(naps("I really like maps") === "I really like naps");
console.assert(naps("I really don't like maps") === "I really don't like naps");