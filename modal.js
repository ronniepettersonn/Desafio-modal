const modalWrapper = document.querySelector(".modal-wrapper")

const buttonOpenModal = document.querySelector("button")

buttonOpenModal.onclick = function() {
    modalWrapper.classList.remove('invisible')
}

document.addEventListener('keydown', function(e) {
    const isEscKey = e.key === 'Escape';

    if(isEscKey) { 
        modalWrapper.classList.add('invisible')
    }    
})
