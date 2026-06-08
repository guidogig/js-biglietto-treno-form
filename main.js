/* due modi di cercare l'elemento formCalc in modo che vscode sappia che é un form
console.log(document.forms.formCalc);
const formEl = document.forms['formCalc']; 
*/

//oppure un commento JSDoc che funziona
/** @type {HTMLFormElement} */
const formEl = document.getElementById('formCalc');

const outDistEl = document.getElementById('outputDistanza');
const outEtaEl = document.getElementById('outputEta');
const outPrezzoEl = document.getElementById('outputPrezzo');


// invece di toFixed(2) che ritorna una stringa, uso l'oggetto Intl.NumberFormat
const formattatoreEuro = new Intl.NumberFormat('it-IT', {
  style: 'currency',
  currency: 'EUR'
});

formEl.addEventListener('submit', (e) => {
    e.preventDefault();
    const distanza = parseInt(formEl.elements.inputKm.value);
    const eta = parseInt(formEl.elements.inputAge.value);
    let prezzo = distanza * 0.21;
    if (eta > 65) {
        prezzo -= prezzo * 0.4;
    } else if (eta < 18) {
        prezzo -= prezzo * 0.2;
    }
    console.log(`Il tuo prezzo: ${formattatoreEuro.format(prezzo)}`);
    outDistEl.innerHTML = `Distanza: ${distanza} km`;
    outEtaEl.innerHTML = `Eta: ${eta} anni`;
    outPrezzoEl.innerHTML = `Prezzo: ${formattatoreEuro.format(prezzo)}`;



});