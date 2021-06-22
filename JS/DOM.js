import Translator from './translator.js'


// Variables

const inputElement = document.querySelector('[data-input-field]');
const outputElement = document.querySelector('[data-output-field]');
const resetBtn = document.querySelector('[data-input-reset]')


// Instantiate new translator class

const translate = new Translator(inputElement, outputElement);

/* Allows addition of event listener to any element, along 
with any number of functions */
const inputEvent = (someInput, eventType = 'click', ...funcs) => {

    someInput.addEventListener(eventType, (event) => {
        funcs.forEach(func => func(event));
    })
}

//event listeners and functions for inputs and outputs

// Reset button
inputEvent(resetBtn, 'click', () => translate.reset())


// Default translation is English to Morse
inputEvent(inputElement, 'input', (e) => translate.toMorse(e.target.value));






