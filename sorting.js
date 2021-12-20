// function merge(arrayOne, arrayTwo) {
//     let c = 0;
//     for (i = 0; i < arrayOne; i++) {
//       if (arrayOne[i] >= "A" && arrayOne[i] <= "Z")
//         if (arrayOne[i] >= "a" && arrayOne[i] <= "z") {
//           c++;
//         } else throw " Please enter a vaild input";
//     }
//     if (!Array.isArray(arrayOne || arrayTwo)) {
//       throw "Input is not a array";
//     }
//     if (arrayOne.length === 0 || arrayTwo.length === 0) {
//       throw " Array  is empty";
//     }
  
//     for (i in arrayOne) {
//       if (typeof arrayOne[i] != "number" && typeof arrayOne[i] != "string")
//         throw " Input is not a number";
//     }
//     for (i in arrayTwo) {
//       if (typeof arrayTwo[i] != "number" && typeof arrayTwo[i] != "string")
//         throw " Not a number";
//     }
//     let specialChars = ['/', '[', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', '-', '=', '{', '}', ',', ';', ':','"','|', '.', '<','>',];
//     let a1 = arrayOne.flat();
//     let a2 = arrayTwo.flat();
//     a = a1.concat(a2);
//     // for(let i = 0; i < a.length; i++){
//     //     if(a[i].length !== 1 ) throw 'string not a character' 
//     // }
//     for(let i = 0; i < a.length; i++){
//         for( let j = 0; j < specialChars.length; j++){
//             if(a[i] === specialChars[j]) throw 'string contains special character' 
//         }
//     }
//     let d1 = [];
//     let d2 = [];
//     let d3 = [];
  
//     for (i in a) {
//       if (typeof a[i] == "number") d1.push(a[i]);
//       else if (a[i] >= "a" && a[i] <= "z") d2.push(a[i]);
//       else d3.push(a[i]);
//     }
  
//     for (i = 0; i < d2.length; i++) {
//       for (j = i + 1; j < d2.length; j++) {
//         if (d2[i] < d2[j]) {
//           temp = d2[i];
//           d2[i] = d2[j];
//           d2[j] = temp;
//         }
//       }
//     }
//     for (i = 0; i < d3.length; i++) {
//       for (j = i + 1; j < d3.length; j++) {
//         if (d3[i] < d3[j]) {
//           temp = d3[i];
//           d3[i] = d3[j];
//           d3[j] = temp;
//         }
//       }
//     }
//     for (i = 0; i < d1.length; i++) {
//       for (j = i + 1; j < d1.length; j++) {
//         if (d1[i] > d1[j]) {
//           temp = d1[i];
//           d1[i] = d1[j];
//           d1[j] = temp;
//         }
//       }
//     }
//     d5 = d2.concat(d3, d1);
//     return d5;
//   }


function merge(arrayOne, arrayTwo) {
    //check if input is array
    // check if len is more than 0 
    // each ele is char or number 
    // sort -> alpha lowercase to uppercase then numeric
    if (!Array.isArray(arrayOne) || !(Array.isArray(arrayTwo))) {
        throw "Input is not an array";
      }
      if (arrayOne.length === 0) {
        throw " Array one is empty";
      }
      if (arrayTwo.length === 0) {
        throw " Array two is empty";
      }
      if (arrayOne ===0 && arrayTwo.length === 0) {
        throw " Array is empty";
      }
    let c = 0;
    for (i = 0; i < arrayOne.length; i++) {
    //   if (arrayOne[i].length === 1arrayOne[i] >= "A" && arrayOne[i] <= "Z")
    //     if (arrayOne[i] >= "a" && arrayOne[i] <= "z") {
    //       c++;
    //     } else throw " Please enter a vaild input";
    if(typeof arrayOne[i]  === 'string'){
        if(arrayOne[i].length === 1){
            if((arrayOne.charAt(i) >= 'a' && arrayOne[i] <= 'z') || (arrayOne[i] >= 'A' && arrayOne[i] <= 'Z')){continue};
        }else throw "Not a valid input"; 
    }else if(typeof arrayOne[i] === 'number'){
        {continue;}
    }else{
        throw "Not a valid input";
    }
    }

    for (i = 0; i < arrayTwo.length; i++) {
        //   if (arrayOne[i].length === 1arrayOne[i] >= "A" && arrayOne[i] <= "Z")
        //     if (arrayOne[i] >= "a" && arrayOne[i] <= "z") {
        //       c++;
        //     } else throw " Please enter a vaild input";
    
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

    
    
  
    // for (i in arrayOne) {
    //   if (typeof arrayOne[i] != "number" && typeof arrayOne[i] != "string")
    //     throw " Not a valid input";
    // }
    // for (i in arrayTwo) {
    //   if (typeof arrayTwo[i] != "number" && typeof arrayTwo[i] != "string")
    //     throw " Not a valid input";
    // }
  
    // let a1 = arrayOne.flat();
    // let a2 = arrayTwo.flat();
  
    a = arrayOne.concat(arrayTwo);
    
    let d1 = [];
    let d2 = [];
    let d3 = [];
  
    for (i in a) {
      if (typeof a[i] == "number") d1.push(a[i]);
      else if (a[i] >= "a" && a[i] <= "z") d2.push(a[i]);
      else d3.push(a[i]);
    }
  
    for (i = 0; i < d2.length; i++) {
      for (j = i + 1; j < d2.length; j++) {
        if (d2[i] < d2[j]) {
          temp = d2[i];
          d2[i] = d2[j];
          d2[j] = temp;
        }
      }
    }
    for (i = 0; i < d3.length; i++) {
      for (j = i + 1; j < d3.length; j++) {
        if (d3[i] < d3[j]) {
          temp = d3[i];
          d3[i] = d3[j];
          d3[j] = temp;
        }
      }
    }
    for (i = 0; i < d1.length; i++) {
      for (j = i + 1; j < d1.length; j++) {
        if (d1[i] > d1[j]) {
          temp = d1[i];
          d1[i] = d1[j];
          d1[j] = temp;
        }
      }
    }
    d5 = d2.concat(d3, d1);
    return d5;
  }
  
  console.log(merge([]))