// write a function randomInRange(a,b)
// that returns a random number between a and b
//
// note: Math.random() returns a float between 0 and 1

function randomInRange(a, b, c) {
   
  var randBetweenZeroAndOne
  
  if(typeof c !== 'undefined') {
    // How do I get a random number between 0 and 1
    randBetweenZeroAndOne = c;
  } else {
    randBetweenZeroAndOne = Math.random();
  }
   
  // Define our min and max possible values
  var minPossibleValue = a;
  var maxPossibleValue = b;

  // How do I calculate the range width?
  var rangeWidth = (maxPossibleValue - minPossibleValue);

  // How do I ensure that the range width is offset
  // from zero by the proper amount?
  var offsetFromZero = minPossibleValue; 

  return randBetweenZeroAndOne * rangeWidth + offsetFromZero;
}

var x = randomInRange(5,100)
console.assert(x >= 5 && x <= 100)
var y = randomInRange(-25,30)
console.assert(y >= -25 && y <= 30)
var z = randomInRange(5,100, 0);
console.assert(z === 5);
