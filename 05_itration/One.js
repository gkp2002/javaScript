//basic loop For loop
for(let i=1;i<=10;i++){
    const element = i
    if(element == 5){
      //  console.log("five is best element");

    }
    // console.log(i)
}

 for(let i=1;i<=10;i++){
  //  console.log(`Table of ${i}`);
    for(let j =1;j<=10;j++){
       // console.log(`inner Loop ${j}`);
      // console.log(`${i} * ${j} = `,i*j)
    }
 }

 const myArray=["flash","batman","superman"]
 for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
 //  console.log(element);
    
 }


 // KeyWord in Loop Break And Continue
//  for (let index = 1; index <=20; index++) {
//     const element = index;
//     if(element==5){
//         console.log("Detect 5 break s");
//         break;
//     }
//     console.log (`Value of is ${index}`)
    
//  }  //Break ue in the loop

 for (let index = 1; index <=20; index++) {
    const element = index;
    if(element==5){
        console.log("Detect 5 skip value");
        continue;
    }
    console.log (`Value of i is ${index}`)
    
 }

