//genertae rendom color
const randomColor = function(){
    const hex='0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)];
        console.log(color);
    }
    return color;
}
let interval;
const startchangingcolor = function(){
    if(!interval){
   interval = setInterval(change, 1000);
    }
    function change(){
        document.body.style.backgroundColor = randomColor();
    }
};
const stopchangingcolor = function(){
  clearInterval(interval);
  interval = null;
};
document.querySelector('#start').addEventListener('click',startchangingcolor);
document.querySelector('#stop').addEventListener('click',stopchangingcolor);