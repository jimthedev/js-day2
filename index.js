// Write out the story in tests
// These tests will fail initially
// then, when create the world, the 
// tests will pass.

// Test drive development checkes our assumptions
// against reality

// Reality
var raceDay = {
  title: 'Horse Bonanza',
  date: new Date('2017/08/17 12:09:36'),
  numAttendees: 600,
  started: false,
  location: { 
    streetAddress: '123 My Street',
    city: 'Minneapolis',
    state: 'MN',
    zip: '55416'
  },
  races: [
    [5,8,2],
    [1,3,9],
    [7,4,6]
  ],
  racesByObject: [
    {
      title: "Race one",
      horses: [5,8,2]
    },
    {
      title: "Race two",
      horses: [1,3,9]
    },
    {
      title: "Race three",
      horses: [7,4,6]
    }
  ]

};

// Assumptions
console.assert(typeof raceDay === 'object');
console.assert(typeof raceDay.title === 'string');
console.assert(typeof raceDay.date === 'object');
console.assert(raceDay.date instanceof Date);
console.assert(typeof raceDay.numAttendees === 'number');
console.assert(typeof raceDay.started === 'boolean');
console.assert(typeof raceDay.location === 'object');
console.assert(typeof raceDay.location.streetAddress === 'string');
console.assert(typeof raceDay.location.city === 'string');
console.assert(typeof raceDay.location.state === 'string');
console.assert(typeof raceDay.location.zip === 'string');
console.assert(typeof raceDay.races === 'object');
console.assert(raceDay.races.length === 3);
console.assert(raceDay.races[0].length === 3);
console.assert(raceDay.races[1].length === 3);
console.assert(raceDay.races[2].length === 3);
console.assert(raceDay.races[0].indexOf(5) === 0);
console.assert(raceDay.races[0].indexOf(7) === -1 );
console.assert(raceDay.races[1][2] === 9);
