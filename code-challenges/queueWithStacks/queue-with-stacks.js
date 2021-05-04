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
}

class PseudoQueue {
  constructor(){
    this.firstStack = new Stack();
    this.secondStack = new Stack();
  }

  enqueue(value){
    this.firstStack.push(value)
  }

  dequeue(){
    if(this.firstStack.top === 0){
      return false;
    }
    if(this.secondStack.top === 0){
      while(this.firstStack.top > 0){
        this.secondStack.push(this.firstStack.pop())
      }
    }

    return this.secondStack.pop()
  }
}

module.exports = PseudoQueue;