let date = '09/28/2021'
let dateFn = new Date(date) 
let today = new Date()
let year = dateFn.getFullYear()
let month = dateFn.getMonth() + 1
let day = dateFn.getDate() 
let tday = today.getDate()
let tmonth = today.getMonth()
let tyear = today.getFullYear()
console.log(year)
console.log(tyear)
console.log(month)
console.log(tmonth)
console.log(day)
console.log(tday)

if(tmonth != month){
    console.log("hey")
}
