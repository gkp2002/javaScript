//  const coading= ["js",'rubby',"java","python","cpp"]

// const value = coading.forEach((item)=>{
//     console.log(item);
//     return item  // in foreach loop donot return any value
// })

// console.log(value);


const mynums=[11,12,13,14,15,16,17,18,19]
// const newNums=mynums.filter((num) =>  {
//     return num >12 //when we use curlybraces then take return value.otherwise not take any bracket
// }) //filter function return value but take one condition
// console.log(newNums);


// const number=[]
// mynums.forEach((num)=>{
//     if(num>13)
//      number.push(num)
// })

// console.log(number);

const books=[
    {
    title:"Book one" ,genre:"History",publish:1999,edition:2004
   },
   {
    title:"Book two" ,genre:"science",publish:1997,edition:2012
   }
   ,
   {
    title:"Book Three" ,genre:"Geograph",publish:1981,edition:1998
   }
   ,
   {
    title:"Book Four" ,genre:"History",publish:2000,edition:2006
   }
   ,
   {
    title:"Book Five" ,genre:"Biology",publish:1995,edition:2017
   }
   ,
   {
    title:"Book Six" ,genre:"Hindi",publish:1989,edition:2009
   }
   ,
   {
    title:"Book Seven" ,genre:"Google",publish:1979,edition:2019
   }
]

const edition=books.filter((bk)=>bk.genre==='History')
const publish=books.filter((bk)=>{ return (bk.publish >=1980)&& (bk.genre==='History')})
console.log(publish);


