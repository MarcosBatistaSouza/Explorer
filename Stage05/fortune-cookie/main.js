const closeCookie = document.querySelector('.close-cookie')
const openedCookie = document.querySelector('.opened-cookie')
const initialDisplay = document.querySelector('.modal1')
const cookieDisplay = document.querySelector('.modal2')
const displayPhrase = document.querySelector('.phrase')
const phrase = ['A vida e uma caixa preta nunca saberemos o seu real significado.⁠',
'não deveríamos temer a morte, mais sim a vida.',
'Faça a pessoa que você gosta se sentir especial ao invés de só mais uma.',
'Seja estranho. Seja aleatório. Seja quem você é. Porque você nunca sabe quem amaria a pessoa que você esconde.',
'A vida é um caos aleatório,ordenada pelo tempo.',
'A verdade, é que dói lembrar dela.',
'Um ato aleatório de bondade, por menor que seja, pode ter um tremendo impacto na vida de outra pessoa.']


function condition(){
    initialDisplay.classList.toggle('hide')
    cookieDisplay.classList.toggle('hide')
}


closeCookie.addEventListener('click', condition)
//openedCookie.addEventListener('click', random)
openedCookie.addEventListener('click',() => {
    const randomIndex = Math.floor(Math.random() * phrase.length)
    const randomPhrase = phrase[randomIndex];
    initialDisplay.classList.toggle('hide')
    cookieDisplay.classList.toggle('hide')
    displayPhrase.innerText = randomPhrase
} )