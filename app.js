const mainPopup = document.querySelector('.main-popup')
const mainClose = document.querySelector('.popup-close')

function openn() {
    mainPopup.style.display='block'
}

mainClose.addEventListener('click',()=>{
    mainPopup.style.display="none"
})