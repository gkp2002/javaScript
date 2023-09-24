//for of

// const arr=[1,2,3,4,5,6,7]
// for (const itr of arr) {
//     console.log(itr);
    
// }
const greting ="Hello World"
// for(const greet of greting){
//     if(greet == ' '){
//         continue;
//     }
//     console.log(greet);
// }

// for (const key in greting) {
//     if (Object.hasOwnProperty.call(greting, key)) {
//         const element = greting[key];
//         console.log(element);
        
//     }
// }


for(const greet in greting){
    if(greet == ' '){
        continue;
    }
    //console.log(`this is index number = ${greet}`);
}

// Map is not store duplicate value
//Map ia store key and value format

const map = new Map()
map.set('IN','india')
map.set('USA',"united state of america ")
map.set('FR','France')

//console.log(map);

// for(const [key,value] of map){
//     console.log(key,':-' ,value);
// }

const myObject ={
    'game1':'NFS',
    'game2':'SpiderMan'
}

// for(const [key,value] of myObjet){
//     console.log(key,':-' ,value);
// }


