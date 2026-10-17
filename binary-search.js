// Given an Array, find a particular element in the array
const name_ = "Oluwaferanmi"

const binarySearch = (array, target) => {
  if (!array.length) {
    return -1;
  }

  let start = 0;
  let end = array.length - 1;
  while (start <= end) {
    let midVal = parseInt(start + (end - start) / 2);
    if (array[midVal] === target) {
      return midVal;
    }
    //   Now , what we do now is to check if the value at the index(midval) is greater than or equal to target
    if (array[midVal] < target) {
      // meaning  the target is to the left hand side
      // the midvalue+1 becomes the start  value
      start = midVal + 1;
    } else if (array[midVal] > target) {
      // meaning the target is to the right hand side
      // the midvalue-1 becomes the end value
      end = midVal - 1;
    }
  }

  return -1
};

console.log(
  binarySearch(
    [1, 2, 3, 4, 5, 6, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
    6
  )
);
