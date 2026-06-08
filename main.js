/* due modi di cercare l'elemento formCalc in modo che vscode sappia che é un form
console.log(document.forms.formCalc);
const formEl = document.forms['formCalc']; 
*/

//oppure un commento JSDoc che funziona
/** @type {HTMLFormElement} */
const formEl = document.getElementById('formCalc');
const inputKmEl = document.getElementById('inputKm');
const inputAgeEl = document.getElementById('inputAge');
const btnCalcEl = document.getElementById('btnCalc');

formEl.addEventListener('submit', (e) => {
    e.preventDefault();
    const distanza = Number(inputKmEl.value);
    const eta = Number(inputAgeEl.value);
    let prezzo = distanza * 0.21;
    console.log(`Distanza: ${distanza} // Eta: ${eta}`);
    if (eta > 65) {
        prezzo -= prezzo * 0.4;
    } else if (eta < 18) {
        prezzo -= prezzo * 0.2;
    } 
    console.log(`Il tuo prezzo: ${prezzo} €`)
    
});