// When provided with a String, capitalize all vowels

// For example:

// Input : "Hello World!"

// Output : "HEllO WOrld!"

// Note: Y is not a vowel in this kata.

function swap (string) {
  
  let vowel = ['a', 'e', 'i', 'o', 'u'];
  
  let newAr = string.split('')
  
  for(let i = 0; i < newAr.length; i++){
    if(vowel.includes(newAr[i])){
      
     newAr[i] = newAr[i].toUpperCase()
    }
  }
  
  return newAr.join('')

}

//different approach

const vowels = ["a", "e", "i", "o", "u"];
const swap = s => s.split('').map(x => vowels.includes(x) ? x.toUpperCase() : x).join('');

// different approach

function swap(st){
  return st.replace(/[aeiou]/g, v => v.toUpperCase() )
}
