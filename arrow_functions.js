//learning arrow functions

const add = function(a, b){
    return a + b
}

const sub = (a, b) => {
    return a - b
}
const divide = (a, b) => {
    return a/b
}
const multiply = a=> a*a

console.log(sub(5,7))
console.log(add(5,7))
console.log(multiply(5,7))
console.log(divide(14, 7))

//implicit return

const name = () => 'aditya'

console.log(name())

const profile = () => ({name: 'aditya'})

console.log(profile())