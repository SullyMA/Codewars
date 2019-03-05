function findOutlier(integers){
  //your code here
  if (isOdd (integers[0]) && isOdd (integers [1])){
  return (integers.find(isEven))
  }
 if (isEven (integers[0]) && isEven (integers [1])){
 return  (integers.find(isOdd))
}
if (isEven (integers [2])){
return (integers.find(isOdd))
}
if (isOdd (integers [2])){
return (integers.find(isEven))
}
}
function isOdd(num) {
return num % 2;}
function  isEven (num) {
return (!isOdd (num))
}
