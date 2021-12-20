const flipObject = function flipObject(object) {
    if (typeof object !== "object") {
      throw 'not an object';
    }
    if (Object.keys(object).length === null && Object.values(object).length === null) {
      throw `Object has no keys or values`;
    }
    let result = {};
    for (let [key, value] of Object.entries(object)) {
      if (typeof value != "object") {
        result[value] = key;
      }
      else if(typeof value == "object"){
        let sub_obj = {};
        for (let [sub_key, sub_value] of Object.entries(value)) {
          sub_obj[sub_value] = sub_key;
        }
        // console.log(`Object has no keys or values {{key`)
        // console.log(sub_obj)
        result[key] = sub_obj;
      }
    }
    return result;
  }

console.log(flipObject{}});
