// singleton make by a constroctors


//object literals
const mysym = Symbol("key1")
 const JsUser={
    name:"Gajanan",
    "Full name":"pintu prajapati",
    [mysym]:"myKey1",
    age:19,
    location:"Gorakhpur",
    email:"gajanan@google.com",
    isLoggedIn:false,
    lastLoggedDays:["Saturday","Sunday"]

 }
//  console.log(JsUser.email);
//  console.log(JsUser["Full name"]);
//  console.log(JsUser[mysym]);

 JsUser.email="pintu@yaho0.com"
 //console.log(JsUser["email"]);
 //Object.freeze(JsUser)
 JsUser.name="pintu"
  //console.log(JsUser);


  JsUser.greeting = function(){
    console.log("hello gajanan");
  }
 // console.log(JsUser.greeting());

  JsUser.greeting2=function(){
   // console.log(`Hello mr. ${JsUser["Full name"]}`) OR
   console.log(`Hello Mr. ${this["Full name"]}`);
  }

  //console.log(JsUser.greeting2());

//Singleton object

 //const tinderUser = new Object()
const tinderUser ={}
tinderUser.id="123abc"
tinderUser.name="Sammy"
tinderUser.isLoggedIn2=false

//console.log(tinderUser);
const regularUser={
    email:"Rohan@google.com",
    fullname:{
        userName:{
                 firstName:"Gajanan",
                 lastName:"Prajapati"   
        }

    }
}
//console.log(regularUser.fullname.userName.firstName);

//merge object
const obj1={1:"a",2:"b"}
const obj2={3:"d",4:"c"}
// const obj3={obj1,obj2}
// console.log(obj3);

//const obj3 = Object.assign({},obj1,obj2)

const obj3={...obj1,...obj2}
//console.log(obj3);

// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn2'));



const course={
  coursename:"js in hindi",
  price: "999",
  courseInstructor:"gajanan"
}

const {courseInstructor:Instructor} =course //this is json object distructure
console.log(Instructor);

// **********JSON************


// {
//   "name":"gajanan",
//   "Course":"MCA"
// }


// [
//   {},
//   {}
// ]