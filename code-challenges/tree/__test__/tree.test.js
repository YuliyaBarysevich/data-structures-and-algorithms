'use strict';

const { BinarySearchTree, BinaryTree } = require('../tree.js');
const Node = require('../node.js');

describe('Binary Search Tree', () => {
  it('should successfully instantiate an empty tree', () => {
    let searchTree = new BinarySearchTree();
    expect(searchTree.root).toBe(null);
  });

  it('should successfully instantiate a tree with a single root node', () => {
    let searchTree = new BinarySearchTree();

    searchTree.insert(10);
    expect(searchTree.root.value).toEqual(10);
    // console.log(tree)
    expect(searchTree.root.right).toBe(null);
    expect(searchTree.root.left).toBe(null);
  });
  it('should successfully add a left child and right child to a single root node', () => {
    let searchTree = new BinarySearchTree();

    searchTree.insert(2);
    searchTree.insert(3);
    searchTree.insert(1);
    // console.log(searchTree)
    expect(searchTree.root.value).toEqual(2);
    expect(searchTree.root.left.value).toEqual(1);
    expect(searchTree.root.right.value).toEqual(3);
  });

  it('should successfully return TRUE if value is in the tree', () => {
    let searchTree = new BinarySearchTree();

    searchTree.insert(2);
    searchTree.insert(3);
    searchTree.insert(1);
    searchTree.insert(8);
    // console.log(searchTree)
    expect(searchTree.contains(8)).toBe(true);
  });

  it('should successfully return FALSE if value is not in the tree', () => {
    let searchTree = new BinarySearchTree();

    searchTree.insert(2);
    searchTree.insert(3);
    searchTree.insert(1);
    searchTree.insert(8);
    // console.log(searchTree)
    expect(searchTree.contains(4)).toBe(false);
  });
});

describe('Binary Tree', () => {

  let one = new Node(1);
  let two = new Node(2);
  let three = new Node(3);
  let four = new Node(4);
  let five = new Node(5);

  one.left = two; 
  one.right = three; 
  three.left = four;
  three.right = five; 
  let tree = new BinaryTree(one);

  it('should successfully return a collection from a preorder traversal', () => {
    expect(tree.preOrder()).toEqual([1, 2, 3, 4, 5]);
  });

  it('should successfully return a collection from an inorder traversal', () => {
    expect(tree.inOrder()).toEqual([2, 1, 4, 3, 5]);
  });

  it('should successfully return a collection from a postorder traversal', () => {
    expect(tree.postOrder()).toEqual([2, 4, 5, 3, 1]);
  });
});