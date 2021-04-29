'use strict'

const Node = require('./node.js');

class LinkedList {
  constructor(){
    this.head = null;
  }

  append(value) {
    let node = new Node(value);

    if(!this.head){
      this.head = node;
    }else{
      let current = this.head;

      while(current.next){
        current = current.next;
      }
      current.next = node;
    }
    return this;
  }

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
    return resultArr.join(' -> ')
  }

  zipLists(list1, list2){
    let current1 = list1.head;
    let current2 = list2.head;
    let newList = new LinkedList();
    while (current1 || current2 ) {
      if (!newList.head) {
        newList.insert(current1.value);
        current1 = current1.next;
      }else if (current1 !== null){
        newList.append(current1.value);
        current1 = current1.next;
      }
      if(current2 !== null){
        newList.append(current2.value);
        current2 = current2.next;
      }

    }
    return newList;
  }
}

module.exports = LinkedList;