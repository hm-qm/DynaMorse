import * as dict from './morseDictionary.js'

export default class Translator {
    
    //Creates new instance of the translator, with empty input and output fields
    constructor(inputElement, outputElement){
        this.inputElement = inputElement;
        this.outputElement = outputElement;
        this.reset();
    }

    //Resets input and output
    reset(){
        this.inputElement.value = "";
        this.outputElement.value = "";
    }

    //Clears text cache
    #clear(){
        this.input = "";
        this.output = "";
    }

    //Translates English to Morse
    toMorse(string){

        //Regex to test string for any alphanumeric words
        const englishRegex = /[\w]/g;

        //Translates to morse if alphanumeric words detected, else try translating to English
        if (englishRegex.test(string) === true){

        // Converts string to character array, translates each index using dictionary.
        const morseTranslated = string.toLowerCase().split("").map((char) => {
            return dict.engToMorse[char];
        }).join(" "); //Returns translated string with 1spc between letter and 4spc between words.

        //Transfers translated string to the display function
        this.display(morseTranslated);
        return morseTranslated;
        } else {
            this.#clear();
            this.toEnglish(string);
        }
    }

    //Translates Morse to English
    toEnglish(string){

        //Regex to test string for morse code
        const morseRegex = /[-.][^A-Za-z]/g;

        //Translates to English if morse code detected, else try translating to English
        if (morseRegex.test(string) === true){

        //Converts morse string to 'word' array by splitting by the 4spc word delimiter
        const wordArr = string.split("    ");

        // Splits each word in array into char array, and translates each index using dictionary.
        const englishTranslated = wordArr.map((word) => {
            const charTranslate = word.split(" ").map((char) =>{
                return dict.morseToEng[char];
            })
            return charTranslate;
        }).join(" ").replace(/\b,|,,\b/g, ""); //Returns translated string with 1spc word delimit, replaces only array commas using regex*/

        //Transfers translated string to the display function
        this.display(englishTranslated);
        return englishTranslated;
        } else {
            this.#clear();
            this.toMorse(string);
        }
    }

    display(string){
        this.#clear(); //Clears output field before next translation
        this.output += string;
        // console.log(this.output);
        this.outputElement.value = this.output;
    }
}




