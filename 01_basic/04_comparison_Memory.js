// console.log(4>3);
// console.log(4<3);
// console.log(4==3);
// console.log(4>=3);
// console.log(4<=3);


// console.log("2">1);
// console.log("02">1);

// console.log(null>0);
// console.log(null<0);
// console.log(null==0);
// console.log(null>=0);

// console.log(undefined>0);
// console.log(undefined < 0);
// console.log(undefined==0);
// console.log(undefined>=0);

console.log("2"===2) //comprison value with datatype
//**************************Data type Summary*******************************

// primitive data type
// 7type=> string,number,boolean,null,undefined,symbol,Bigint
const score = 200
const scorevalue = 201.3
const value=false
const nullvalue=null
let undefin;

const value1 = Symbol('1000')
const value2 = Symbol('1000')





//Refrence type or Non primitive type
 // Arrats, Objects,functions
  
const heros =["gajanan","shivam","prem"];
let object = {
    name:"gajanan",
    age:19
}
const myfunction=function(){
    console.log("hello gajanna")
}

console.log(myfunction)
console.log(typeof nullvalue);



//***************************Memory Storage************************
//  Stack(primitve),Heap (Non-Primitive)
let myname = "gajnana.com"
let another = myname
another = "pintuKumar"
console.log(myname)
console.log(another);

let userOne={
    email:"user@google.com",
    upi: "user@ybl"
}

let userTwo=userOne
userTwo.email = "gajnan@google.com"
console.log(userTwo.email);
console.log(userOne.email)


//In  heap memory we use reference varian=ble
//In Stack memory we are use Copy variable