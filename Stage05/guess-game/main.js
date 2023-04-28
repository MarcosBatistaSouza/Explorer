//Varáveis
const display1 = document.querySelector(".display1")
const display2 = document.querySelector(".display2")
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")
let randomNumber = Math.round(Math.random()*10)
let xAttempts = 1

//Funções
function randomClick(event){
  event.preventDefault()

  const inputNumber = document.querySelector('#inputNumber')

  if(Number(inputNumber.value) <= 0 || Number(inputNumber.value) >=10){
    alert('Numero inválido')
  }else{

    if(Number(inputNumber.value) == NaN){

    }else{
    if(Number(inputNumber.value) == randomNumber){
      condition()
      
      document.querySelector("h2").innerText = (`Acertou em ${xAttempts} tentativas!`)
    }
    inputNumber.value = ""
    xAttempts++
    }
  }
}

function resetClick(){
  condition()

  xAttempts = 1
  randomNumber = Math.round(Math.random()*10)
}

function condition(){
  display1.classList.toggle('hide')
  display2.classList.toggle('hide')
}

function enterKey(event){
    if(event.key == 'Enter' && display1.classList.contains('hide')){
      resetClick()
  }
}

//Eventos
btnTry.addEventListener('click',randomClick)
btnReset.addEventListener('click',resetClick)
document.addEventListener('keydown',enterKey)