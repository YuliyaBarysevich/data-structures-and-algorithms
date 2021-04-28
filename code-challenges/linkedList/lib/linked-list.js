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

  insertBefore(value, newVal){
    let node =this.head;
    let newNode;

    while(node !== null){
      if(node.next.value === value){
        newNode = new Node(newVal);
        newNode.next = node.next;
        node.next = newNode;
        return this;
      }
      node = node.next;
    }
  }

  insertAfter(value, newVal){
    let node = this.head;
    let newNode;

    while(node !== null){
      if(node.value === value){
        newNode = new Node(newVal)
        newNode.next = node.next;
        node.next = newNode;
        return this;
      }
      node = node.next;
    }
  }

  kthFromEnd(k){
    let node = this.head;
    let length = 0;
    let count = 0;

    while(node){
      length++;
      node = node.next;
    }
    node = this.head;
    if(k === length || k < 0 || k > length || length === 0){
      return false;
    }
    while(node) {
      if(count === length - k -1){
        return node.value
      }
      count++;
      node = node.next;

    }

  }

}


module.exports = LinkedList;
