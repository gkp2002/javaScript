const myArray=[0,13,24,34,44,5]
//in javascript array is use any value type
//Js array indexing 0

//console.log(myArray[3])
const myHeros=["Shaktiman","Ironman"]
const array= new Array(11,22,33,44,55,66)
//console.log(array[0]);


// Array method

// myArray.push(90)
// myArray.push(100)
// myArray.pop() //pop function is dlete las element in array

// myArray.unshift(9)  //Add element first index in array
// myArray.shift()


// console.log(myArray.includes(9))
// console.log(myArray.indexOf(13));

// console.log(myArray);
// const newarr = myArray.join()
// console.log(newarr);

// console.log(typeof newarr);

//Slice , splice

console.log("A",myArray);
const newarray = myArray.slice(1,3)
console.log(newarray);
const newarray2 = myArray.splice(1,3)
console.log("c",myArray);
console.log(newarray2);

//Slice is don not effect in our array\
//Splice array is effect on array and print the all range and cut the value in array .

