const userEmail ="gkp@gmail.com"
if(userEmail){
    console.log("Got user Email");
}else{
    console.log("Don't have a user email");
}

/*
  => Falsy value
       --> false,0,-0,Bigint 0n,null,undefined,NaN,""
 =>Truthy Value
      --> "0" , 'false' , " " , [] , {} , function(){} 
  
*/

// array = []
// if (array.length === 0) {
//      console.log("Array is Empty");
// }

// const emptyObj ={}
// if(Object.keys(emptyObj).length === 0){
//     console.log("object is empty");
// }

// Nullish Coalescing Operator(??) null undefined
let val1;
// val1=5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15

val1 = null ?? undefined ?? 20 // this is use in null an undefined 
console.log(val1);

// condition ? true : false 
 const iceTeaPrice =100
 iceTeaPrice <=80 ? console.log("Less Than 80"):console.log("More than 80");


