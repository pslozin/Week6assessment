const shuffle = require("../src/shuffle");
let arr = [1,2,4.7,15,6,44]


function shuffleArray(array) {
  let arrCopy = [...array]
  for (let i = arrCopy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arrCopy[i], arrCopy[j]] = [arrCopy[j], arrCopy[i]];
  }
  return arrCopy
}

describe('shuffleArray should', () => {
  test('return an array', () => {
      const result = shuffleArray([1, 2, 3])
      expect(Array.isArray(result)).toBe(true)
    })
  
  test('return an array of the same length as the argument sent in', () => {
      const input = [1, 2, 3]
      const result = shuffleArray(input)
      expect(result).toHaveLength(input.length)
  })
  
  test('contain all the same items as the original array', () => {
      const input = [1, 2, 3]
      const result = shuffleArray(input)
      expect(result.sort()).toEqual(input.sort())
  })
  
  test('shuffle the items in the array', () => {
      const input = [1, 2, 3, 4, 5]
      const result = shuffleArray(input)
      expect(result).not.toEqual(input)
  })
  
});