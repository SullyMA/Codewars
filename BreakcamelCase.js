// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

function solution(string) {
    return string.split('').map((el) => el === el.toUpperCase() ?  ' '+ el : el ).join('')
}



//different approach

const solution = string => {
  return [...string].map((char) => {
    return (char === char.toUpperCase()) ? ` ${char}` : char;
  }).join('');
}

//different approach

const solution = string => string.replace(/[A-Z]/g, ' $&');
