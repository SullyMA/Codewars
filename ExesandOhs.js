// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

function XO(str) {
    //code here
  let strLower = str.toLowerCase()
  let counterX = 0;
 
  let counterO = 0;
  for(let i = 0; i < strLower.length; i++){
   if(strLower[i] === 'x'){
     counterX++
   } else if(strLower[i] === 'o'){
     counterO++
   }
  }
  return counterX === counterO
}

//refactor

const XO = str => {
  str = str.toLowerCase().split('');
  return str.filter(x => x === 'x').length === str.filter(x => x === 'o').length;
}
