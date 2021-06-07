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

  add(val){
    let node = new Node(val);

    if(!this.head){
      this.head = node;
    } else{
      node.next = this.head;
      this.head = node;
    }
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
      ll.add([key, val]);
      this.storage[hash] = ll;
    }else{
      this.storage[hash].add([key, val]);
    }
  }

  contains(key) {
    let hash = this.hash(key);

    while(this.storage){
      if(this.storage[hash].head.val[0] === key){
        return true;
      }else {
        return false;
      }
    }
  }

  get(key){
    let hash = this.hash(key);
    if(this.storage[hash].head.val[0] === key){
      return this.storage[hash].head.val[1]
    }else {
      return null;
    }
  }
}

module.exports = { Node, LL, Hashtable }