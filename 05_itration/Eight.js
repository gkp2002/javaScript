const myNums = [1,2,3,4,5]
// const mytotal = myNums.reduce(function(acc,currval){
//     console.log(`acc ${acc} and Carrval ${currval}`);
//     return acc+currval 
// },3)

// console.log(mytotal);

const myTotal= myNums.reduce((acc,currval)=> (acc+currval) , 0)
console.log(myTotal);

const shopingCard =[{
    itemName:"js course",
    price:199
},
{
    itemName:"Cpp course",
    price:299
},
{
    itemName:"Java course",
    price:199
}]

let price=shopingCard.reduce((ac,item)=>item.price+ac ,0)
console.log(price);
