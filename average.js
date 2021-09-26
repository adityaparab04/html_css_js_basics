// function average(arr){
//     let sum = 0;
//     let totalCount = 0;
//     arr.forEach(element => {
//         for(i=0; i<element.length; i++){
//             sum = sum + element[i]
//             totalCount = totalCount + 1;
//         }
//     });
//     return (Math.round(sum/totalCount));
// }


// console.log(average([[1, 2, 3]]))


// function average(arrays){
//     let arr = arrays
//     if (Array.isArray(arrays) !== true) {
//         throw "Input variable should be an array";
//         }
//         if (arr.length == 0 || typeof arr === undefined) {
//         throw "Empty Array";
//       }
    
//     let sum = 0;
//     let numberCount = 0;
//     let newArr = arr.flat();  // referred from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat
//     for (i = 0; i <= newArr.length; i++) {
//         if (typeof newArr[i] == "string") {
//           throw "String input is not allowed";
//         }
//     }
//     console.log(newArr)
//     for(let i = 0; i<newArr.length; i++){
//         sum = sum + newArr[i];
//         numberCount += 1 ;
//     }
//     return sum/numberCount;
// }

// 

// Average Function
const average = function average(arrays) {
    if (Array.isArray(arrays) !== true) { //throws error if array is not an array
      throw "Not a vaild input";
    }
    if (arrays.length == 0) throw " Array is empty"; //throws error if array is empty
    for (i in arrays) {
      if (arrays[i].length === 0 || typeof i == "undefined") throw "one of an array element empty" //throws error if there are only one element in array
    }
    if (!Array.isArray(arrays[0])) throw "Input is single dimension array and not arrays of array" //throws error if there is only single dimension array
  
    let arr = arrays.flat();
    for (i in arr) {
      if (typeof arr[i] == "string") throw "String should not be present in array" //throws error if string is present in array
    }
    let sum = 0;
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
      sum = sum + arr[i];
      count += 1
    }
    return Math.round(sum / count);
  }
  console.log(Math.round(average([[2,'a'], [5,2]])))