// Complete the function that takes a string of English-language text and returns the number of consonants in the string.

// Consonants are all letters used to write English excluding the vowels a, e, i, o, u.

function consonantCount(str) {
  
  let count = 0;
  
  let vowel = ['a', 'e', 'i', 'o', 'u']
  
  for(let i = 0; i < str.length; i++){
    if(!vowel.includes(str[i].toLowerCase()) && /^[a-zA-Z]+$/.test(str[i])){
      count++
    }
  }
  return count
}


//different approach with regular expression/regex

function consonantCount(str) {
  let arr = [];
  let vocab = "bcdfghjklmnpqrstvwxzy";
  for (let i = 0; i < str.length; i++) {
    if(vocab.includes(str[i].toLowerCase())) {
      arr.push(str[i]);
    }
  return arr.length;
}
