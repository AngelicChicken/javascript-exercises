const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(arr) {
	result = arr.reduce((total, currentNum)=> {
    return total + currentNum;
  }, 0);

  return result;
};

const multiply = function(arr) {
  result = arr.reduce((total, currentNum) => {
    return total * currentNum;
  }, 1);
  return result;
};

const power = function(num1, num2) {
	return Math.pow(num1, num2);
};

const factorial = function(num) {
  if(num == 0){
    return 1;
  } else {
    let i = 1;
    let total = 1;
    while(i <= num){
      total *= i;
      i++;
    }
    return total;
  }
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
