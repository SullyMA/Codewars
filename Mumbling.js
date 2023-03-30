// This time no story, no theory. The examples below show you how to write function accum:

// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.

function accum(s) {
  let str = ''
  let letter = s.split('')
  
  for(let i = 0; i < letter.length; i++){
    if(i < letter.length - 1){
      str += letter[i].toUpperCase() + letter[i].repeat(i).toLowerCase() + '-'  
  
    } else {
      str += letter[i].toUpperCase() + letter[i].repeat(i).toLowerCase()
    }
  }
  return str
}


//different approach

function accum(s) {
	return s.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-');
}
