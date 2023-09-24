//function starts
 function sayMyName(){
    console.log("Gajanan")
    console.log("Kumar");
 }

 //   sayMyName()  //Method of calling function in java script

 function addToNumbers(num1,num2){ //When we make variable inside paranthesis 
    const result = (num1+num2); 
    return result  
 }

 // addToNumbers(3,null) //passing in function called argumnet

 const result= addToNumbers(54,46)
 // console.log("Result is=",result);


 function loginUserMessage(username){  //we use default value in function loginUserMessage(username="GKp")
   // if(username==undefined){ 1st method
    if(!undefined){
        console.log("please enter a username");
        return
    }
    return `${username} just logg in`
 }

// console.log(loginUserMessage())

 //when we not passing argument in function then print undefined


 function calculateCartPrice(...num1){ // (...) this is called rest operator
    return num1
 }

//  console.log(calculateCartPrice(200,400,500));
 

const user={
    username:"gajanan",
    price:199
}

function handleObject(anyobject){ //passing object by argumnet in function
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}
// handleObject(user)  //object passing
 
// handleObject({
//     username:"Rahul",
//     price:1999
// })

const myArray =[200,400,100]
 
function returnArray(getArray){
    return getArray[1]  //return array in function
}
console.log(returnArray(myArray)); //passing array by argument in function