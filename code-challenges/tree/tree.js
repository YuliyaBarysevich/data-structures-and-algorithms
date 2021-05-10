'use strict';

const Node = require('./node');

class BinarySearchTree {
  constructor(root = null){
    this.root = root;
  }

  insert(value){
    let node = new Node(value);

    if(this.root === null){
      this.root = node;
      return this;
    }

    let currentRoot = this.root;

    while(currentRoot){
      if(currentRoot.value === value){
        return 'This value is already exists';
      }
      if(currentRoot.value > value){
        if(currentRoot.left === null){
          currentRoot.left = node;
          return this;
        }
        currentRoot = currentRoot.left;
      } else{
        if(currentRoot.right === null){
          currentRoot.right = node;
          return this;
        }
        currentRoot = currentRoot.right;
      }
    }
  }

  contains(value){

    if(this.root === null){
      return 'Tree is empty';
    }
    let currentRoot = this.root;

    while(currentRoot){
      if(currentRoot.value > value){
        currentRoot = currentRoot.left;
      }else if(currentRoot.value < value){
        currentRoot = currentRoot.right;
      }else if(currentRoot.value === value){
        return true;
      }else{
        return false;
      }
    }
    return false;
  }
}

class BinaryTree {
  constructor(root = null){
    this.root = root;
  }

  preOrder(){
    // READ LEFT RIGHT
    let results = [];

    let _walk = node => {
      results.push(node.value); //read data first
      if(node.left){
        _walk(node.left);
      }
      if(node.right){
        _walk(node.right);
      }
    };
    _walk(this.root);
    return results;
  }

  inOrder(){
    // LEFT READ RIGHT
    let results = [];

    let _walk = node => {
      if(node.left){
        _walk(node.left);
      }
      results.push(node.value);
      if(node.right){
        _walk(node.right);
      }
    };
    _walk(this.root);
    return results;
  }

  postOrder(){
    // LEFT RIGHT READ
    let results = [];

    let _walk = node => {
      if(node.left){
        _walk(node.left);
      }
      if(node.right){
        _walk(node.right);
      }
      results.push(node.value);
    };
    _walk(this.root);
    return results;
  }
}

module.exports = { BinarySearchTree, BinaryTree };
