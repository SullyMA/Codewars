// Write a method that takes one argument as name and then greets that name, capitalized and ends with an exclamation point.

// Example:

// "riley" --> "Hello Riley!"
// "JACK"  --> "Hello Jack!"


var greet = function(name) {
  
    let lowerName = name.toLowerCase()
    
    let capFirstLetter = lowerName.charAt(0).toUpperCase() + lowerName.slice(1)
    
    return `Hello ${capFirstLetter}!`
  
};

//other approach

var greet = function(name) {
  return "Hello " + name.charAt(0).toUpperCase() + name.slice(1).toLowerCase() + "!";
};
