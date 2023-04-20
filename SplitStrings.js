// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

// Examples:

// * 'abc' =>  ['ab', 'c_']
// * 'abcdef' => ['ab', 'cd', 'ef']



function solution(str){
  if(str.length % 2 !== 0){
     str = str + '_'
  }
  let arr = str.split('')
  let pairs = []
  for(let i = 0; i < arr.length; i+=2){
   pairs.push(arr[i] + arr[i + 1])
  }
  return pairs
}

//different approach


function solution(str){
  var i = 0;
  var result = new Array();
  if (str.length % 2 !== 0) {
    str = str + '_';
  }
  while (i < str.length) {
      result.push(str[i] + str[i+1]);
      i += 2;
    }
  return result;
}



