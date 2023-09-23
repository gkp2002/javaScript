const marvel_heros =['thor',"Spiderman","ironman"]
const dc_heros =["shaktiman","batman","superman"]
//marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros=marvel_heros.concat(dc_heros)
// console.log(allHeros);


const allnew_heros=[...marvel_heros,...dc_heros] // this is spread operator
//console.log(allnew_heros);

const another_array = [1,2,3,[4,5,6],7,[67,89,[4,5]]]
let real_another_array =another_array.flat(Infinity) //make multple array in 1d  array
//console.log(real_another_array);



console.log(Array.isArray("gajanan"));
console.log(Array.from("gajanan"));//Make a String to array using Array.from
console.log(Array.from({name:"Gajanan"}));



let score1=100
let score2=200
let score3=300
 console.log(Array.of(score1,score2,score3));

