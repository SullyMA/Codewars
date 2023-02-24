// Please write a function that sums a list, but ignores any duplicate items in the list.

// For instance, for the list [3, 4, 3, 6] , the function should return 10.

function sumNoDuplicates(numList) {
  let sum = 0;
    numList.forEach(num => {
        if(numList.indexOf(num) === numList.lastIndexOf(num)) {
            sum += num;
        }
    });
    return sum;
}

function sumNoDuplicates(numList) {
  return numList.filter((i)=> numList.indexOf(i) == numList.lastIndexOf(i)).reduce((a,b)=> a + b, 0)
}
