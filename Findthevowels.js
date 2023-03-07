// We want to know the index of the vowels in a given word, for example, there are two vowels in the word super (the second and fourth letters).

// So given a string "super", we should return a list of [2, 4].

// Some examples:
// Mmmm  => []
// Super => [2,4]
// Apple => [1,5]
// YoMama -> [1,2,4,6]

function vowelIndices(word){
  //your code here
  let vowel = ['a', 'e', 'i', 'o', 'u', 'y'];
  let arrOfIndeces = []
  //loop thru string of word
  for(let i = 0; i < word.length; i++){
    //if the vowel has the letter lowercase
    if(vowel.includes(word[i].toLowerCase())){
      //then push into the new arr
     arrOfIndeces.push(i + 1)
    } 
  }
  //return new arr
  return arrOfIndeces
}

//different approach 

function vowelIndices(word) {
  const arr = [];
  for(let i = 0; i < word.length; i++) {
    if(/[aeioyu]/i.test(word[i])) {
      arr.push(i+1);
    }
  }
  return arr;
}
