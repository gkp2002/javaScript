// Date start from january 1 ,1970
let mydate = new Date()
// console.log(mydate)
// console.log(mydate.toString())
// console.log(mydate.toISOString())
// console.log(mydate.toJSON())
// console.log(mydate.toLocaleDateString())
// console.log(mydate.toLocaleString())
// console.log(mydate.toLocaleTimeString())
// console.log(typeof mydate)


let myCreatedDate = new Date(2023,0,23)
console.log(myCreatedDate.toString())
let myCreatedDate1 = new Date(2023,0,23,5,3)
console.log(myCreatedDate1.toLocaleString());
let myCreatedDate2 = new Date("01-14-2023")
console.log(myCreatedDate2.toLocaleString());

let myTimestamp = Date.now()
// console.log(myTimestamp);
// console.log(myCreatedDate.getTime())
// console.log(Math.floor(Date.now()/1000))

let newDate = new Date()
console.log(newDate.getDate())
console.log(newDate.getDay())
console.log(newDate.getMonth()+1)
console.log(newDate.getFullYear())
console.log(newDate.getMinutes())
console.log(newDate.getHours())


console.log(newDate.toLocaleString('default',{weekday:"short"}));
console.log(newDate.toLocaleString('default',{weekday:"long"}));