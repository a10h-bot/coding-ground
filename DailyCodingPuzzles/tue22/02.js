//morse code
//Decode the Morse code
var MORSE_CODE = {
  '.-': 'a',
  '-...': 'b',
  '-.-.': 'c',
  '-..': 'd',
  '.': 'e',
  '..-.': 'f',
  '--.': 'g',
  '....': 'h',
  '..': 'i',
  '.---': 'j',
  '-.-': 'k',
  '.-..': 'l',
  '--': 'm',
  '-.': 'n',
  '---': 'o',
  '.--.': 'p',
  '--.-': 'q',
  '.-.': 'r',
  '...': 's',
  '-': 't',
  '..-': 'u',
  '...-': 'v',
  '.--': 'w',
  '-..-': 'x',
  '-.--': 'y',
  '--..': 'z',
  '.----': '1',
  '..---': '2',
  '...--': '3',
  '....-': '4',
  '.....': '5',
  '-....': '6',
  '--...': '7',
  '---..': '8',
  '----.': '9',
  '-----': '0',
  '.-.-.-': '.',
  '--..--': ',',
  '..--..': '?',
  '-..-.': '/',
  '.--.-.': '@'
};

function decodeMorse(str) {
  return str.split('   ').map(e =>
    e.split(' ').map(e1 => MORSE_CODE[e1]).join('')).join(' ').trim();
}
console.log(decodeMorse('.... . -.--   .--- ..- -.. .'));
//--------------------------------------------------------------------------------------------------------------
decodeMorse = function (morseCode) {

  return morseCode.split('   ').map(word => word.split(' ').map(code => (MORSE_CODE[code] || '')).join('')).join(' ').trim();
}
console.log(decodeMorse('.... . -.--   .--- ..- -.. .'));