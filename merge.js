const merge = function merge(arrayOne, arrayTwo) {
  //check if input is array
  // check if len is more than 0 
  // each ele is char or number 
  // sort -> characters lowercase to uppercase then numbers
  if (!Array.isArray(arrayOne) || (!Array.isArray(arrayTwo))) {
      throw "Input is not an array";
    }
    if (arrayOne.length === 0 || arrayTwo.length === 0) {
      throw " Array  is empty";
    }
  for (i = 0; i < arrayOne.length; i++) {
    if(typeof arrayOne[i]  === 'string'){
      if(arrayOne[i].length === 1){
          if((arrayOne[i] >= 'a' && arrayOne[i] <= 'z') || (arrayOne[i] >= 'A' && arrayOne[i] <= 'Z')){continue;}
      }else throw "Not a valid input"; 
    }else if(typeof arrayOne[i] === 'number'){
      {continue;}
    }else{
      throw "Not a valid input";
    }
  }

  for (i = 0; i < arrayTwo.length; i++) {
      if(typeof arrayTwo[i]  === 'string'){
          if(arrayTwo[i].length === 1){
              if((arrayTwo[i] >= 'a' && arrayTwo[i] <= 'z') || (arrayTwo[i] >= 'A' && arrayTwo[i] <= 'Z')){continue;}
          }else throw "Not a valid input"; 
      }else if(typeof arrayTwo[i] === 'number'){
          {continue;}
      }else{
          throw "Not a valid input";
      }
    }

  arr = arrayOne.concat(arrayTwo);
  let specialChars = ['<','>','@','!','#','$','%','^','&','*','(',')','_','+','[',']','{','}','?',':',';','|','/','~','`','-','=', '"', "'",'1','2','3','4','5','6','7','8','9','0' ];
    
    for(let j = 0; j<arr.length; j++){
      for(let k =0; k<specialChars.length; k++){
        if(specialChars[k] === arr[j]){
          throw 'array contains special character'
        }
      }
    }
  let temp1 = [];
  let temp2 = [];
  let temp3 = [];

  for (i in arr) {
    if (typeof arr[i] == "number") temp1.push(arr[i]);
    else if (arr[i] >= "a" && arr[i] <= "z") temp2.push(arr[i]);
    else temp3.push(arr[i]);
  }
  for (i = 0; i < temp2.length; i++) {
    for (j = i + 1; j < temp2.length; j++) {
      if (temp2[j] < temp2[i]) {
        temp = temp2[i];
        temp2[i] = temp2[j];
        temp2[j] = temp;
      }
    }
  }
  for (i = 0; i < temp3.length; i++) {
    for (j = i + 1; j < temp3.length; j++) {
      if (temp3[j] < temp3[i]) {
        temp = temp3[i];
        temp3[i] = temp3[j];
        temp3[j] = temp;
      }
    }
  }
  for (i = 0; i < temp1.length; i++) {
    for (j = i + 1; j < temp1.length; j++) {
      if (temp1[j] < temp1[i]) {
        temp = temp1[i];
        temp1[i] = temp1[j];
        temp1[j] = temp;
      }
    }
  }
  let result = temp2.concat(temp3, temp1);
  return result;
}
console.log(merge(['B', 2],['$', 'a', 8, 6]))


  