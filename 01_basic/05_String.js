const name ="gajnanan"
const repoCount = 50
//console.log(name + repoCount + "kumar")


//console.log(`hello my name is ${name} and reposity count ${repoCount}`);

const gameName = new String('gajanan-kumar-prajapati')
// console.log(gameName[0])
// console.log(gameName.__proto__)
// console.log(gameName.length)
// console.log(gameName.toUpperCase())
// console.log(gameName.toLowerCase());
// console.log(gameName.charAt(3));
// console.log(gameName.indexOf('j'));
// const newString = gameName.substring(0,3)
// console.log(newString);
let str2 = gameName.slice(2,5)
console.log(str2);

const newStringone="       gajanan        "
console.log(newStringone)
console.log(newStringone.trim())


const url = "https://gajanan.com/gajanan%20kumar"
console.log(url);

console.log(url.replace('%20','_'))
console.log(url.includes('gaja'));
console.log(gameName.split("-")); //split basis on dash into array
