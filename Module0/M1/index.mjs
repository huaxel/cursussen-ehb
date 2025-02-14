'use strict';

const getal1 = document.getElementById('getal1');
const getal2 = document.getElementById('getal2')
const berekenKnop = document.getElementById('bereken')
const resultaatVeld = document.getElementById('resultaat')

berekenKnop.addEventListener('click', () => {
    const n1 = Number(getal1.value);
    const n2 = Number(getal2.value);
    
    if (isNaN(n1) || isNaN(n2)) {
        resultaatVeld.textContent = 'Voer alsjeblieft geldige getallen in!';
        return;
    } 
    const som = n1 + n2;
    resultaatVeld.textContent = `De som is: ${som}`;
    }
);