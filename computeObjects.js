computeObjects = function computeObjects(objects, func) {
    let resultObj = {};
    if (Array.isArray(objects) !== true) {
      throw "Input is not a array";
    }
    objects.forEach((obj) => {
      if (typeof obj !== "object") {
        throw " Input is not an object";
      }
      if (Object.keys(objects).length == 0) {
        throw "Object is empty";
      }
      if (objects.length == 0) {
        throw " Its an empty array";
      }
      for (x in obj) {
        if (typeof obj[x] !== "number") {
          throw " Input value of object is not a Number";
        }
      }
    });
    if (typeof func != "function") throw " Its not a function";
  
    objects.forEach((x) => {
      for (obj in x) {
        if (resultObj.hasOwnProperty(obj)) {
          resultObj[obj] = resultObj[obj] + func(x[obj]);
        } else {
          resultObj[obj] = func(x[obj]);
        }
      }
    });
    return resultObj;
  }
const first = { x: 2, y: 3};
const second = { a: 70, x: 4, z: 5 };
const third = { x: 0, y: 9, q: 10 };
  console.log(computeObjects([first, second], x => x * 2));
