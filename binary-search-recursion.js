// Given an Array, find a particular element in the array
const binarySearch = (array, target) => {
    if(!array.length){
        return -1
    } 
    let start = 0;
    let end = array.length;
    let midVal = start + (end - start)/2
    console.log(midVal, "Middle value of the array")
}

binarySearch([1,2,3,4,5,6,8,9,10,11,12,13,14,15,16,17,18,19,20]); 