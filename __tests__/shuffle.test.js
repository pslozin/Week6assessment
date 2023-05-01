const shuffle = require("../src/shuffle");
let arr = [1,2,4.7]

// describe("shuffle should...", () => {
//   // CODE HERE
//   const returnValue = shuffle(arr)
//   expect(returnValue).toBe("array");
//   // const returnValue = shuffle()
//   //     expect(returnValue).toBe(arr)
// });

describe("shuffle should return an array", () => {
  // CODE HERE
  let returnValue = shuffle(arr)
  
  expect(typeof returnValue).toBe('object')
  
});

describe("shuffle should returns an array of the same length ", () => {
  // CODE HERE
  let returnValue = shuffle(arr)
  
  expect(returnValue.length).toBe(arr.length)
  
});
