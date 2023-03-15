// This kata requires you to write a function which merges two strings together. It does so by merging the end of the first string with the start of the second string together when they are an exact match.

// "abcde" + "cdefgh" => "abcdefgh"
// "abaab" + "aabab" => "abaabab"
// "abc" + "def" => "abcdef"
// "abc" + "abc" => "abc"


function mergeStrings(first, second){
  let count = 0;
  for (let i = 0; i < first.length; i++) {
    if (first[i] === second[count]) {
      
      count++;
      
    } else {
      count = 0;
      if (first[i] === second[count]) 
        
      count++;
    }
  }

  return first + second.slice(count);
}



//different approach

function mergeStrings(first, second){
  let res = '';
  if( first === second) {
    return first;
  }
  for(let i = 1; i < second.length; i++) {
    if(first.endsWith(second.slice(0, i))) {
      res = second.slice(i);
    }
  }
  return !res ? first + second : first + res;
}
