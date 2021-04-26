'use strict';

const Node = require('./node.js');

class LinkedList {
  constructor(){
    this.head = null;
  }

  //================EXAMPLE FROM LECTUE================

  append(value) {
    // instantiate a new node to add to our LL
    let node = new Node(value);

    if(!this.head) {
      this.head = node;
    } else {
      // traversal happens here
      let current = this.head; // start the traversal at the beginning (head) of the LL

      while(current.next) { // this is the actual traversal
        current = current.next; // this moves you along in your traversal
      }

      current.next = node;
    }

    return this;
  }
  //======================================================


  insert(value){
    let node = new Node(value);
  
    if(!this.head){
      this.head = node;
    }else{
      node.next = this.head;
      this.head = node;
    }
    return this;
  }

  includes(value){
    let node = this.head;
    while(node) {
      if (node.value === value){
        return true;
      }
      node = node.next;
    }
    return false;
  }

  toString(){
    let node = this.head;
    let resultArr = [];
    while(node){
      resultArr.push(`{${node.value}}`);
      if(node.next === null){
        resultArr.push('NULL');
      }
      node = node.next;
    }
    return resultArr.join(' -> ');
  }
}


module.exports = LinkedList;
