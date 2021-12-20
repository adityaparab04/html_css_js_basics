function commonKeys(obj1, obj2) {
    if (obj1 === undefined || obj2 === undefined){
        throw `Required parameters are not passed`;
    }
    if (typeof obj1 !== "object") {
      throw `Parameter 1 is not an Object `;
    }
    
    if (typeof obj2 !== "object") {
      throw `Parameter 2 is not an object`;
    }
    for (i = 0; i < obj1.length; i++) {
      if (Object.keys(obj1[i]).length === 0) {
        console.log(0);
      }
    }
    for (i = 0; i < obj2.length; i++) {
      if (Object.keys(obj2[i]).length === 0) {
        console.log(0);
      }
    }
    let newObj = {};
    for (let [key, value] of Object.entries(obj1)){
        if (key in obj2){
            if(typeof value == "object"){
                if(typeof obj2[key] == "object"){
                    let sub_result = {}
                    sub_obj1 = obj1[key]
                    sub_obj2 = obj2[key];
                    for (let [sub_key, sub_value] of Object.entries(sub_obj1)){
                        if(sub_key in sub_obj2){
                            if (sub_obj2[sub_key] === sub_obj1[sub_key]){
                                sub_result[sub_key] = sub_value;
                            }
                        }
                    }
                    if(sub_result !== {}){
                        newObj[key] = sub_result;
                    }
                }
            }
            else{ 
                if (obj2[key] === obj1[key]){
                    newObj[key] = value;
                }
            }
        }
    }
    return newObj
  }

let first = {a: 2, b: 4};
let second = {a: 5, b: 4};
let third = {a: 2, b: {x: 7}};
let fourth = {a: 3, b: {x: 7, y: 10}};
let fifth = 23;
console.log(commonKeys(first, fourth)); // {b: 4}

// let a = 'b';
// //   value = Object.values(obj1)
