const buttons=document.querySelectorAll('.button');
const body = document.querySelector('body');
buttons.forEach(function(button){
    console.log(button);
    button.addEventListener('click',function(event){
           console.log(event);
           console.log(event.target);
           const value = event.target.id;
           switch(value){
            case "yellow":
                body.style.backgroundColor=event.target.id;
                break;
            case "gray":
                body.style.backgroundColor=event.target.id;
                break;
            case "blue":
                body.style.backgroundColor=event.target.id;
                break;
            case "white":
                body.style.backgroundColor=event.target.id;
                break;
            case 'purple':
                body.style.backgroundColor=event.target.id;
                break;

           }
         
    })

})