// let c=300 //global function
  let a=300
 
//DOM Document object Model
// console.log(a);
// console.log(b);
// console.log(c);




//Nested Scope

 function one(){
    const username="gajanan"
    function two(){
        const website = "youtube"
        console.log(username);
    }
  //  console.log(website);
    two()
 }
//    one()

if(true){
    const username = "Gajanan"
    if(username === "gajanan"){
        const website="youtube"
        console.log(username+website);

    }
}

//++++++++++++++++Interesting+++++++++++++++++
console.log(addone(5));
 function addone(num){
    return num+1
 }

 const addTwo = function(num){ //this is called Expression 
    return num +2
}
console.log(addTwo(5)) 
