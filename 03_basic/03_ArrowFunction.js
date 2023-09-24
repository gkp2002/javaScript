const user={
   userName:"gajanan",
   price:999,

   welcomemessage: function(){
    console.log(`${this.userName} welcome to website`);
    // console.log(this);
   }
}
// user.welcomemessage()
// user.userName="Shivam"
// user.welcomemessage()

// console.log(this);

// glob object on wepage is Window

// function coffee(){
//     let userName="Rahul"
//     console.log(this.userName);
// }


// const coffee =()=>{
//     let userName="Rahul"
//     console.log(this);
// }
// //inArrow Funtion this return empty

// coffee()

//++++++++++++Arrow Function ++++++++++++++++++++

//  const addTwo = (num1,num2) => { //basic Arrow Function
//     return num1 + num2
//  }

// if use of function curlybracess in js the use return keyword

//emplicit function of Arrow Function in javAscript

// const addTwo=(num1,num2) => num1+num2

// const addTwo = (num1,num2) => (num1 +num2)

const addTwo = (num1,num2) => ({userName:"Rhul"})


 console.log(addTwo(3,4));