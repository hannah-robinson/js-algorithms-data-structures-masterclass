// Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted.

function countUniqueValues(sortedArr) {
  let count = 0
  let left = 0
  let right = 1

  if (sortedArr.length > 0) {
    count++

    while (left < sortedArr.length) {
      if (
        sortedArr[right] !== undefined &&
        sortedArr[right] !== sortedArr[left]
      ) {
        count++
      }
      left++
      right++
    }
  }
  return count
}

// Time Complexity:
// Space Complexity:

// Test cases

countUniqueValues([1, 1, 1, 1, 1, 2]) // 2
countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]) // 7
countUniqueValues([]) // 0
countUniqueValues([-2, -1, -1, 0, 1]) // 4
