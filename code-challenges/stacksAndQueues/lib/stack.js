'use strict'

class Stack {
  constructor() {
    this.top = 0;
  }

  push(value) {
    this[this.top++] = value;
    return this;
  }

  pop(){
    
    if (this.top === 0){
      return 'Stack is empty'
    }

    let result = this[--this.top];

    delete this[this.top];
    return result;
  }

  peek(){
    if (this.top === 0){
      return 'Stack is empty'
    }

    let result = this[this.top - 1]
    return result;

  }

  isEmpty(){
    if(this.top === 0){
      return true;
    }else{
      return false;
    }
  }
}

module.exports = Stack;