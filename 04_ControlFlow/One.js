// if Statement

// comparison operator
/*
<,>,<=,<=,==,!=,===
*/
// const temperature = 51
//  if(temperature<50){

//   console.log("Temoerature is less than 50");
//  } else{
//     console.log("temperature is greater than 50");
//  }



// const score=200
// if(score>100){
//     let power ='fly'
//     console.log(`User power: ${power}`);
// }

//Nested if

//  const balance=1000
//  if(balance<500){
//     console.log("less than");
//  }else if(balance<750){
//     console.log("less than 750")
//  }else{
//     console.log("Less than 1200")
//  }



const userLoggedIn = true
const debitcard = true
const loggedInGoogle =false
const loggedInEmail = true
if(userLoggedIn && debitcard && 2==2){
    console.log("Allow to buy course");
}
if(loggedInGoogle || loggedInEmail){
    console.log("users logged in");
}