'use strict';

class Queue {
  constructor(){
    this.front = 0;
    this.next = null;
  }

  enqueue(value){
    this[this.front] = value;
    this.front++;
    if (this.next === null) {
      this.next = 0;
    }
    return this;
  }

  dequeue(){
    if(this.front === 0){
      return 'Queue is empty';
    }

    let value = this[this.next];
    delete this[this.next++];
    this.front--;

    if(this.front === 0){
      this.next = null;
    }
    return value;
  }

  peek(){
    if(this.front === 0){
      return 'Queue is empty';
    }

    return this[this.next];

  }

  isEmpty(){
    if(this.front === 0){
      return true;
    }else{
      return false;
    }
  }
}

module.exports = Queue;
