const myObject ={
    js:"javaScript",
    cpp : "c++",
    py: "python"

}
// for(const key in myObject){
//     console.log(key);
//     console.log(`${key} Shortcut is for ${myObject[key]}`)
// }


// const programing = ['cpp','js','java','python']
// for(const key in programing){
//     console.log(`${key} -> ${programing[key]}`);
// }

// const map = new Map()
// map.set('IN','india')
// map.set('USA',"united state of america ")
// map.set('FR','France')

// for(const key in map){
//     console.log(key); //map is not itrable beacuse map is not store index value
// }





//For Each Loop


const coading = ['cpp','js','java','python','JavaScript']
// coading.forEach( function(item){
//     console.log(item);

// })

// coading.forEach((item)=>{console.log(item);})

// function printme(item){
//     console.log(item);
// }
// coading.forEach(printme)


// coading.forEach((item,index,arr)=>{console.log(item,index,arr);})


//object access by for each

const myCoading=[{
    languageName:'janascript',
    languagtitle:'js'
},
{
  languageName:'python',
  languagtitle:'py'
},{
    languageName :"gajanan",
    languagtitle:12
}
]

myCoading.forEach((item)=>{console.log(item);})
