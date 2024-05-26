let calculation = localStorage.getItem('cal') || '';

displayCalculation();
            
function updateCalculation(value) {
    calculation += value;
    
    displayCalculation();
    localStorage.setItem('cal', calculation);
}

function displayCalculation() {
    document.querySelector('.js-calculation').innerHTML = calculation;
}