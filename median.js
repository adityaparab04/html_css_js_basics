const medianElement = function medianElement(array){
    if(Array.isArray(array) !== true) throw "Input not in an array format";
    if (array.length == 0) throw " Array is empty"
    for(i in array){
        if (typeof array[i] == 'string') throw "Input can only be in numbers not in string"
    }
        let objmedian = {};
        let arr = [];

        for (let i=0; i<=array.length; i++){
            arr[i] = array[i];
        }
        console.log(arr)
        array = array.sort(function (a, b) {
          return a - b;
        });
        console.log(array)
      
        let length = array.length;
      
        if (length % 2 == 1) {
          let ans1 = array[array.length / 2 - 0.5];
          objmedian[ans1] = arr.indexOf(ans1);
          return objmedian;
        } else {
          let ans2 = (array[array.length / 2] + array[array.length / 2 - 1]) / 2;
          objmedian[ans2] = arr.indexOf(array[array.length / 2 - 1]);
          return objmedian;
        }
    }
console.log(medianElement([2,1,2,2,2,4]))



