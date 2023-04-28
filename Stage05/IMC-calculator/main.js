const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')
const form = document.querySelector('form')
const error = document.querySelector('.alert-error')

const Modal = {
    modal : document.querySelector('.modal-wrapper'),
    message : document.querySelector('.modal .title span'),
    btnClose : document.querySelector('.modal .title .btn-close'),

    open(){
        Modal.modal.classList.add('open')
    },
    close(){
        Modal.modal.classList.remove('open')
    }
}

form.onsubmit = (event) => {
    event.preventDefault()

    const height = inputHeight.value
    const weight = inputWeight.value
    const result = IMC(height,weight)

    Modal.open()
    Modal.message.innerText = `Seu IMC é de ${result}`
}

Modal.btnClose.onclick= () =>{
    Modal.close()
}

function IMC (height,weight){
    return (weight/((height/100)**2)).toFixed(2)
}