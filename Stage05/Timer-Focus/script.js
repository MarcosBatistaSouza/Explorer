const Buttonplay = document.querySelector('.play')
const Buttonpause = document.querySelector('.pause')
const ButtonsoundOn = document.querySelector('.sound-on')
const ButtonsoundOff = document.querySelector('.sound-off')
const Buttonstop = document.querySelector('.stop')
const Buttonset = document.querySelector('.set')
const MinutesDisplay = document.querySelector('.minutes')
const SecondsDisplay = document.querySelector('.seconds')
let minutes

Buttonplay.addEventListener('click', function(){
    Buttonplay.classList.add('hide')
    Buttonpause.classList.remove('hide')
    Buttonset.classList.add('hide')
    Buttonstop.classList.remove('hide')
})

Buttonpause.addEventListener('click', function(){
    Buttonplay.classList.remove('hide')
    Buttonpause.classList.add('hide')
})

Buttonstop.addEventListener('click', function(){
    Buttonstop.classList.add('hide')
    Buttonset.classList.remove('hide')
    Buttonpause.classList.add('hide')
    Buttonplay.classList.remove('hide')
})

ButtonsoundOn.addEventListener('click', sound())
ButtonsoundOff.addEventListener('click', sound())

function sound(){
    ButtonsoundOn.classList.toggle('hide')
    ButtonsoundOff.classList.toggle('hide')
    return sound
}

Buttonset.addEventListener('click',function(){
    minutes = prompt('Quantos minutos?')
    MinutesDisplay.textContent = minutes
})