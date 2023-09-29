const randomNumber=parseInt(Math.random()*100 + 1)
const submit=document.querySelector('#subt')
const userinput = document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses')
const Remaining = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')

const starOver = document.querySelector('.resultParas')
const p = document.createElement('p')
let prevGuess =[]
let numGuess =1
let playGame = true
if(playGame){{
       submit.addEventListener('click',function(e){
        e.preventDefault();
       const guess = parseInt(userinput.value)
       console.log(guess);
       validateGuess(guess);
    })
}}
function validateGuess(guess){
    if(isNaN(guess)){
        alert("please enter a valid number")
    }else if(guess<1){
        alert("please enter a number more than one")
    }else if(guess>100){
         alert("please enter a number less than hundred")
    }else{
        prevGuess.push(guess)
        if(numGuess==11){
            displayGuess(guess);
            displayMessage(`game over. random nuber was ${randomNumber}`)
            endgame()
        }else{
            displayGuess(guess);
            checkGuess(guess)
        }
    }
   
}
function checkGuess(guess){
   if(guess == randomNumber){
    displayMessage(`your guestted right`)
    endgame();
   }else if(guess < randomNumber){
    displayMessage(`Number is To Low`)
   }else if(guess > randomNumber){
    displayMessage(`Number is To HIGH`)
   }
}
function displayMessage(message){
    lowOrHi.innerHTML = `<h2>${message}</h2>`

}
function displayGuess(guess){
    userinput.value = '';
    guessSlot.innerHTML+=`${guess} , `
    numGuess++;
    Remaining.innerHTML = `${11-numGuess}`;
   
}

function newgame(){
 const newgameButton = document.querySelector('#newgame')
  newgameButton.addEventListener('click',function(e){
        randomNumber =parseInt(Math.random()*100 + 1)
        prevGuess=''
        numGuess=1
        guessSlot.innerHTML=''
        Remaining.innerHTML = `${11-numGuess}`;
        userinput.removeAttribute('disabled')
        starOver.removeChild(p)
        playGame=true
  })
}
function endgame(){
  userinput.value=''
  userinput.setAttribute('disabled','')
  p.classList.add('button')
  p.innerHTML = `<h1 id='newgame'> start new game <h1>`
  starOver.appendChild(p)
  playGame=false
  newgame()
}