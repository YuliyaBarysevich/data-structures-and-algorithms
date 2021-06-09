'use strict'

class Node {
  constructor(val){
    this.val = val;
    this.next = null;
  }
};

class LL {
  constructor() {
    this.head = null;
  }

  insert(value){
    let node = new Node(value);

    if(!this.head) {
      this.head = node;
    } else {
      let current = this.head; 
      while(current.next) { 
        current = current.next; 
      }

      current.next = node;
    }

    return this;
  }

  getList() {
    if(!this.head) return 'list is empty';

    let current = this.head;

    while(current) {
      current = current.next;
    }
  }
};

class Hashtable{
  constructor(size){
    this.storage = new Array(size);
    this.size = size;
  }

  hash(key){
    return key.split('').reduce((acc, cur) => {
      return acc + cur.charCodeAt(0);
    }, 0) * 19 % this.size;
  }

  add(key, val){
    let hash = this.hash(key);

    if(!this.storage[hash]){
      let ll = new LL();
      ll.insert([key, val]);
      this.storage[hash] = ll;
    }else{
      this.storage[hash].insert([key, val]);
    }
  }

  contains(key) {
    let hash = this.hash(key);

    let currentItem = this.storage[hash].head

    while(currentItem){
      if(currentItem.val[0] === key){
        return true;
      }
      currentItem = currentItem.next
    }
    return false;
  }

  get(key){
    let hash = this.hash(key);

    let currentItem = this.storage[hash].head

    while(currentItem){
      if(currentItem.val[0] === key){
        return currentItem.val[1]
      }
      currentItem = currentItem.next
    }
    return null;
  }
}

module.exports = { Node, LL, Hashtable }