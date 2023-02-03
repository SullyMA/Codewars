// Convert a hash into an array. Nothing more, Nothing less.

// {name: 'Jeremy', age: 24, role: 'Software Engineer'}
// should be converted into

// [["age", 24], ["name", "Jeremy"], ["role", "Software Engineer"]]
// Note: The output array should be sorted alphabetically by key name.

function convertHashToArray(hash){
  //your code here - sort the keys!
  //To convert the enumerable string-keyed properties of an object to an array
  let hashToArr = Object.entries(hash).sort()
  //return sorted arr
  return hashToArr
}

// Refactor

const convertHashToArray = o => Object.entries(o).sort();
