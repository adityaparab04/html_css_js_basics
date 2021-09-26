const modeSquared = function modeSquared(array) {
    if (Array.isArray(array) !== true) {
      throw "Input is not an array";
    }
    if (array.length == 0 || typeof array === undefined) throw "Array is empty"
    for (i = 0; i <= array.length; i++) {
      if (typeof array[i] == "string") throw "Array contains String element"
    }
    let u = 0;
    for (i = 0; i <= array.length; i++) {
      for (j = i + 1; j <= array.length; j++) {
        if (array[i] == array[j]) {
          u++;
          break;
        }
      }
    }
    if (u == 0) return 0
    let mode = {};
    let max = 0;
    let count = 0;
    let newArray = [];
    array.forEach((element) => {
      if (mode[element]) {
        mode[element]++;
      } else {
        mode[element] = 1;
      }
      if (count < mode[element]) {
        max = element;
  
        count = mode[element];
      }
      if (array.length == 1) {
        return 0;
      }
    });

    for (element in mode) {
      if (mode[element] >= count) {
        newArray.push([element]);
      }
    }
    let sum = 0;
    newArray.forEach((e) => {
      sum = sum + Math.pow(e, 2);
    });
    return sum;
  }
  console.log(modeSquared([5,7,2,2,2,5,5,5]));