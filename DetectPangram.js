// A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.


function isPangram(string){
let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
let str = string.toLowerCase()
 
for(let i = 0; i < alphabet.length; i++){
    if(str.indexOf(alphabet[i]) < 0){
      return false;
    }
  }
  return true;
}

//different approach

function isPangram(string){
  return 'abcdefghijklmnopqrstuvwxyz'
    .split('')
    .every((x) => string.toLowerCase().includes(x));
}

//different approach

function isPangram(string) {
	return new Set(string.toLocaleLowerCase().replace(/[^a-z]/gi, '').split('')).size === 26;
}

function isPangram(string){
  return (string.match(/([a-z])(?!.*\1)/ig) || []).length === 26;
}
