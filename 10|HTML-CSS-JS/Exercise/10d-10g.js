// 10f
function toggle(selector) {
    const buttonElement = document.querySelector(selector);

    if (buttonElement.classList.contains('is-toggled')) {
        buttonElement.classList.remove('is-toggled');
    } else {
        turnOffPotentialPreviousButton();
        buttonElement.classList.add('is-toggled');
    }
}

// Check if there exists a button that is already turned ON, if exists, we should turn that button OFF before turning the new button ON!
// 10g
function turnOffPotentialPreviousButton() {
    const previousButtonElement = document.querySelector('.is-toggled');

    // We have to check if this exists because null doesn't have classList property!
    if (previousButtonElement) {
        previousButtonElement.classList.remove('is-toggled');
    }
    
}