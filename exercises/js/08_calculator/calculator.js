const add = function(a,b) {
	return a + b;
};

const subtract = function(a, b) {
	return a-b;
};

const sum = function(array) {
	let sumArray = 0;

  for (let i = 0; i < array.length; i++){
    sumArray += array[i];
  }
    
  return sumArray;
 
};

const multiply = function(array) {

  let prodArray = 1;

  for (let i = 0; i < array.length; i++){
    prodArray *= array[i];
  }
    
  return prodArray;

};

const power = function(a,b) {
	return a**b;
};

const factorial = function(n) {
	
  return (n > 1) ? n * factorial(n - 1) : 1;

};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
