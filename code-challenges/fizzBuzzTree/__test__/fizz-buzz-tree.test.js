'use strict';

const { BinarySearchTree, BinaryTree } = require('../../tree/tree.js');
const Node = require('../../tree/node.js');
const fizzBuzzTree = require('../fizz-buzz-tree.js');

describe('Find maximum value in a Binary Tree', () => {

  let one = new Node(5);
  let two = new Node(9);
  let three = new Node(5);
  let four = new Node(2);
  let five = new Node(15);
  let six = new Node(30);
  let seven = new Node(10);
  let eight = new Node(11);
  let nine = new Node(4);

  one.left = two; 
  one.right = three;
  two.left = four;
  two.right = five; 
  three.right = six; 
  five.left = seven;
  five.right = eight;
  six.left = nine;
  let tree = new BinaryTree(one);

  let newTree = fizzBuzzTree(tree);

  it('should return a modified list of the values', () => {
    expect(newTree.breadthFirst()).toEqual(['Buzz', 'Fizz', 'Buzz', '2', 'FizzBuzz', 'FizzBuzz', 'Buzz', '11', '4']);
  });
  it('should turn the number into a String if the value is not divisible by 3 or 5', () => {
    expect(typeof newTree.root.left.left.value).toBe('string');
  });
  it('should replace the value with “Fizz” if the value is divisible by 3', () => {
    expect(newTree.root.left.value).toEqual('Fizz');
  });
  it('should replace the value with “Buzz” if the value is divisible by 5', () => {
    expect(newTree.root.value).toEqual('Buzz');
  });
  it('should replace the value with “FizzBuzz” if the value is divisible by 3 and 5', () => {
    expect(newTree.root.left.right.value).toEqual('FizzBuzz');
  });
});