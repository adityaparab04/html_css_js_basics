//performing a task
function greet(name, age){
    console.log("hello " + name + ' my age is ' + age);
}
greet('aditya' , 22);

//calculating a value
function square(number){
    return number * number;
}
console.log(square(84));

//factory function

function createCircle(radius){
    return{
        radius,
        draw: function(){
            console.log('draw');
        }
    };
}
//const circle1 = createCircle(1);

console.log(createCircle(5));
