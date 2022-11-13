const add = function(num1, num2) {
  let result = num1 + num2;

  return result;
};

const subtract = function(num1, num2) {
  let result = num1 - num2;

  return result;	
};

const sum = function(array) {
	let sumArr = array.reduce((a, b) => a + b, 0);

  return sumArr;
};

const multiply = function(...num) {
  const array = num[0];
  const newArray = [];
  
  array.forEach(item => {
    if(!num.includes(item)) {
        newArray.push(item);
    }
  });

  let sumArr = newArray.reduce((a, b) => a * b)

  return sumArr;
};

const power = function(num1, num2) {
	return Math.pow(num1, num2);
};

const factorial = function(num) {
	function fact(num) {
        if (num === 0)
          { return 1; }
        else
          { return num * fact( num - 1 ); }
    }
    return fact(num);
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
