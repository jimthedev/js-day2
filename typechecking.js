// Below is a snippet of code taken from a racing
// game (not really!) It allows you to accelerate
// the speed by a given amount. The problem is if
// you call the function without specifying an
// amount, it inadvertently sets the speed to NaN
// First write a comment that explains why it was
// setting speed to NaN when no parameter is given
// Then refactor the function to have a default
// amount of 1 if no param is given.

var speed = 0;

function accelerate(amount) {

  if (typeof amount === 'undefined' || speed === 0 ) {
    amount = 1;
  }  

  // The line below is equal to
  // speed = speed + ammount
  // but, since amount is of type undefined
  // when we use the concat operator (+)
  // it converts amount to the string
  // 'undefined'
  speed += amount;
}

// Speed is initially 0 MPH (not moving)

// Initially accelerate
accelerate();

// Speed should now be 1 MPH because we accelerated
console.assert(speed === 1);

// Accelerate by 5 MPH
accelerate(5);

// Speed should now be 6 MPH
console.assert(speed === 6);

accelerate();

console.assert(speed === 7);
// 7