// Overview
// Bubblesort is an inefficient sorting algorithm that is simple to understand and therefore often taught in introductory computer science courses as an example how not to sort a list. Nevertheless, it is correct in the sense that it eventually produces a sorted version of the original list when executed to completion.

// At the heart of Bubblesort is what is known as a pass. Let's look at an example at how a pass works.

// Consider the following list:

// 9, 7, 5, 3, 1, 2, 4, 6, 8
// We initiate a pass by comparing the first two elements of the list. Is the first element greater than the second? If so, we swap the two elements. Since 9 is greater than 7 in this case, we swap them to give 7, 9. The list then becomes:

// 7, 9, 5, 3, 1, 2, 4, 6, 8
// We then continue the process for the 2nd and 3rd elements, 3rd and 4th elements ... all the way up to the last two elements. When the pass is complete, our list becomes:

// 7, 5, 3, 1, 2, 4, 6, 8, 9


function bubblesortOnce(a) {
 
  let newArr = [...a]
  for(let i = 0; i < 1; i++){
    for(let j = 0; j < newArr.length; j++){
      if(newArr[j] > newArr[j + 1]){
        let temp = newArr[j];
        newArr[j] = newArr[j + 1]
        newArr[j + 1] = temp
      }
    }
  }
  return newArr
}

// Refactor

function bubblesortOnce(a) {
    return [...a].map((e, i, arr) => e > arr[i+1] ? (arr[i] = arr[i+1], arr[i+1] = e, arr[i]) : e)
    
}

//Another approach

function bubblesortOnce(arr) {
  let newArr = arr.slice();
  for (let i = 0; i < newArr.length - 1; i++) {
    if (newArr[i] > newArr[i + 1]) {
      [newArr[i], newArr[i + 1]] = [newArr[i + 1], newArr[i]];
    }
  }
  return newArr;
}
