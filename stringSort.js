const sortString = function sortString(str){
//check if string parameter exists
if (typeof str !== "string") throw "Invalid input"

// check if length of the string parameter is greater than 0
if (str.length === 0) throw "String Empty"

// check if the string parameter is of the proper type
if(str.length === 1) throw "String only contains one element hence it's a character";

// check if the string parameter is not just empty spaces
if (!str.replace(/\s/g, "").length) {
    throw "string only contains empty spaces";
  }
//variable declaration   
    let s = str.split('');      //string split into array
    len = str.length;           //length of string stored in variable
    let upperCase = [];         //arrays declared for storing uppercase, lower case, number, special characters and spaces
    let lowerCase = [];
    let num = [];
    let specialChars = [];
    let spaces = [];
    let sortedString = [];      //array created for storing final output as sorted string
    
    //main logic
    for (i = 0; i< len; i++){
        if (s[i] >= "A" && s[i] <= "Z") upperCase.push(s[i]); // upe
        else if (s[i] >= "a" && s[i] <= "z") lowerCase.push(s[i]); // 
        else if (s[i] !== undefined && s[i].match(/^[0-9]+$/g)) num.push(s[i]);
        else if (s[i] != undefined && s[i].match(/\s/g)) spaces.push(s[i]);
        else specialChars.push(s[i]);
    }
    upperCase = upperCase.sort();
    lowerCase = lowerCase.sort();
    num = num.sort();

    return sortedString = (sortedString.concat(upperCase, lowerCase, specialChars, num, spaces).join(''))
}

console.log(sortString('  '))

// str = 'ZdiTya@ parab 78603'
// let s1 = str.split('')
// len = str.length
// v1 = []
// v2 = []
// v3 = []
// v4 = []
// v5 = [] 
// for (i = 0; i < len; i++) {
//     if (s1[i] >= "A" && s1[i] <= "Z") v1.push(s1[i]);
//     else if (s1[i] >= "a" && s1[i] <= "z") v2.push(s1[i]);
//     else if (s1[i] != undefined && s1[i].match(/^[0-9]+$/g)) v3.push(s1[i]);
//     else if (s1[i] != undefined && s1[i].match(/\s/g)) v4.push(s1[i]);
//     else v5.push(s1[i]);
//   }
// console.log(v1.sort())
// console.log(v2.sort())
// console.log(v3.sort())
// console.log(v4.sort())
// console.log(v5)
// let variable = []
// variable = (variable.concat(v1,v2,v3,v4,v5).join(''))
// console.log(variable.toString())


