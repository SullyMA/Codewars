
// Write a program that outputs the top n elements from a list.

// Example:

// largest(2, [7,6,5,4,3,2,1])
// // => [6,7]

function largest(n, array) {
  // Find the n highest elements in a list

  let sortArr = array.sort((a , b) => a - b)
  
  return sortArr.splice(sortArr.length -n)
  
}

//refactor

const largest = function(n,xs){
  return n === 0 ? [] : xs.sort((a, b)=> a - b).slice(-n)
}

function largest(n, array) {
    
  return array.sort((a,b)=>b-a).slice(0, n).reverse();
}
