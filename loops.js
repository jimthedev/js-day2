var stable = {
  horses: [
    {
      name: 'Prancy',
      color: 'brown'
    },
    {
      name: 'Buttercup',
      color: 'yellow'
    },
    {
      name: 'BIG BROWN REAL HORST OG REALEST FOR REALS',
      color: 'fawn'
    }
  ]
};

/**
 * feed - uses a 'for' loop
 */
function feed(horses) {
  var numHorses = horses.length;
  for (var i=0; i < horses.length; i++) {
    console.log(horses[i].name + ': Thanks for feeding me!');
  }
  console.log('done feeding!');
}

feed(stable.horses);

/**
 * brush - uses Array.prototype.map
 */
function brush(horses) {
  var numHorses = horses.length;
  var vaccinatedHorses = horses.map(function(horse){
    if(horse.color === 'brown') {
      horse.vaccinated = true;
    }
    return horse;
  });
  console.log(vaccinatedHorses);
  console.log('done brushing!');
}

brush(stable.horses);

/**
 * foreach
 */
[2, 7, 9].forEach(function(element, index) {
  console.log(element + index);
});

/**
 * for-in - slow, iterates over an element's
 * properties.
 */
var farm = {
  type: 'corn',
  address: 'My street'
};

for (prop in farm) {
  console.log(typeof prop);
  console.log(prop + ': ' + farm[prop]);
}


