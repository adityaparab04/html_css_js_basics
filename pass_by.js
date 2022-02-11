let age = 22;
let name = 'Aditya Parab';
let grades = ['A', 'C+', 'A+'];

let d = grades;  //pass by reference
let e = age; //pass by value
e= e+1;
console.log(e)
console.log(age)
d = [1, 2, 3]

grades.push('A');
console.log(grades);
console.log(d);


let x = [10, 12];
console.log(x);

add(x, 6);
console.log(x);

function add(arr, ele){
    arr.push(ele);   //pass by reference
    arr = [ele]; //pass by value
    console.log(arr);
}