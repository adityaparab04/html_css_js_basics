let person = {
    name: 'Aditya',
    Age: 21
};
console.log(person);

//Dot Notation
person.name = 'krutank';
console.log(person.name);

//Bracket Notation
let selection1 = 'name';
person[selection1] = 'Ravi';
let selection2 = 'Age';
person[selection2] = 57;
console.log(person[selection1]);
console.log(person[selection2]);