// Create a function mispelled(word1, word2):

// mispelled('versed', 'xersed'); // returns true
// mispelled('versed', 'applb'); // returns false
// mispelled('versed', 'v5rsed'); // returns true
// mispelled('1versed', 'versed'); // returns true
// mispelled('versed', 'versed'); // returns true
// It checks if the word2 differs from word1 by at most one character.

// This can include an extra char at the end or the beginning of either of words.

// In the tests that expect true, the mispelled word will always differ mostly by one character. If the two words are the same, return True.


var mispelled = function(word1, word2){

  let i = 0, j = 0;
  let count = 0;
  
  while (i< word1.length || j < word2.length) {
    if ( word1[i] !== word2[j] ) {
      ++count;
      if (word1[i+1] === word2[j] && word2[j] !== word2[j+1]) {
        --j;
      } else if (word1[i] === word2[j+1] && word1[i] !== word1[i+1]) {
        --i;
      }
    }  
    
    ++i, ++j;
  }

  return count === 1;  
}

//different approach 

var mispelled = function(word1, word2)
{
  if(Math.abs(word1.length - word2.length) > 1) return false
  if(~word1.indexOf(word2) || ~word2.indexOf(word1)) return true
  return word1.split('').filter((e,i)=>e!=word2[i]).length==1
}
