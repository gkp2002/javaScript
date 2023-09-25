const myNumbers = [1,2,3,4,5,6,7,8,9,10]
 let newNums=myNumbers.map((num)=> num+10)
 newNums=myNumbers.map((num)=> {return (num+30)})
//  console.log(newNums);


//Chaining
const newNumer = myNumbers.map((nums)=> nums*10)
.map((num)=>num+3)
.filter((num)=>num>=40)


// console.log(newNumer);
