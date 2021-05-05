'use strict';

const multiBracketValidation = (input) => {
  let brackets = [];

  for (let i = 0; i < input.length; i++){
    if(input[i] === '{' || input[i] === '}' || input[i] === '(' || input[i] === ')' || input[i] === '[' || input[i] === ']'){
      brackets.push(input[i]);
    }
  }

  if(brackets.length % 2 === 0){
    return true;
  }else{
    return false;
  }
};


module.exports = multiBracketValidation;

