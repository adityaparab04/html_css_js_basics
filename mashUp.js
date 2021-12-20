// let string1 = 'Rahul';
// let string2 = 'Ambodkar';
// char = '@'
// // console.log(string2.length)
// let newString1 = ''
// let newString2 = ''
// // let a = string2.length 
// // let newString1 = string1.padEnd(string2.length, char)
// let sum =0;
// if(string1.length > string2.length){
//     newString2 = string2.padEnd(string1.length, char)
//     console.log('string 1 is greater and new ' + newString2)
//     newString1 = string1
// }
// else{
//     newString1 = string1.padEnd(string2.length, char)
//     console.log('string 2 is greater and new string 2 is ' + newString1)
//     newString2 = string2
// }
// console.log()
//  str1 = newString1.split('')
//  str2 = newString2.split('')
// console.log(str1, str2)
// let len = str1.length
// console.log(len)
// let mashupArr = []
// let index = 0
// for( let i = 0; i < len; i++){
//     for(let j = i-1; j <= i; j++){
//         if(index === 0){
//             mashupArr.push(str1[i])
//             index = 1;
//         }
//         else if(index === 1){
//             mashupArr.push(str2[i])
//             index = 0;
//         }
    
//     }
    
        
// }
//  console.log(mashupArr.join())

const mashUp = function mashUp(string1, string2, char){
    if (typeof string1 !== "string" || string1 === undefined) {
        throw "Input is not vaild";
    }
    if (typeof string2 !== "string" || string1 === undefined) {
        throw "Input is not vaild";
    }
    if (string1.length == 0) {
        throw "Input cannot be empty";
    }
    if (string2.length == 0) {
        throw "Input cannot be empty";
    }
    if (typeof char != "string" || char == undefined || char.length != 1) {
        throw " Not a valid charater value";
    }
    if ( (!string1.replace(/\s/g, "").length)){
        throw "string1 only contains empty spaces";
    }
    if (!string2.replace(/\s/g, "").length){
        throw "string2 only contains empty spaces";
    }
    if (!char.replace(/\s/g, "").length){
        throw "char only contains empty spaces";
    }
    let newString1 = ''
    let newString2 = ''

    if(string1.length > string2.length){
        newString2 = string2.padEnd(string1.length, char)
        newString1 = string1
    }
    else{
        newString1 = string1.padEnd(string2.length, char)
        newString2 = string2
    }
    str1 = newString1.split('')
    str2 = newString2.split('')
    let len = str1.length
    let mashupArr = []
    let index = 0
    for( let i = 0; i < len; i++){
        for(let j = i-1; j <= i; j++){
            if(index === 0){
                mashupArr.push(str1[i])
                index = 1;
            }
            else if(index === 1){
                mashupArr.push(str2[i])
                index = 0;
            }
        }
    }
    return(mashupArr.join(''))
}
console.log(mashUp('Suryavanshi', 'Aditya',  '+'))