// Immediately Invoked Function Expressions (IIFE)

(function chai(){
    //Named IIFE
    console.log('DB connected')
})();


((name)=>{
    console.log(`DB connected TWo ${name}`)
})('gajanan');

//IIFE is block global error