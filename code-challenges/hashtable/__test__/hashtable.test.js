'use strict';

const { Node, LL, Hashtable } = require('../hashtable.js');

describe('hashtable', () => {
  it('should create a new table', () => {
    let hashtable = new Hashtable(3);
    expect(hashtable).toBeTruthy();
    expect(hashtable.size).toEqual(3);
  });

  it('adding a key/value to your hashtable results in the value being in the data structure', () => {
    let hashtable = new Hashtable(3);
    hashtable.add('testKey1', 'testValue1');
    hashtable.add('testKey2', 'testValue2');
    hashtable.add('testKey3', 'testValue3');
    expect(hashtable.storage[0].head.val).toEqual([ 'testKey2', 'testValue2' ])
  });

  it('should Successfully hash a key to an in-range value', () => {
    let hashtable = new Hashtable(3);
    hashtable.add('testKey1', 'testValue1');
    hashtable.add('testKey2', 'testValue2');
    hashtable.add('testKey3', 'testValue3');

    expect(hashtable.contains('testKey1')).toBe(true);
    expect(hashtable.contains('wrong')).toBe(false);

  });

  it('retrieving based on a key returns the value stored', () => {
    let hashtable = new Hashtable(3);
    hashtable.add('testKey1', 'testValue1');
    hashtable.add('testKey2', 'testValue2');
    hashtable.add('testKey3', 'testValue3');

    expect(hashtable.get('testKey1')).toEqual('testValue1');
    expect(hashtable.get('testKey2')).toEqual('testValue2');
    expect(hashtable.get('testKey3')).toEqual('testValue3');
    expect(hashtable.get('wrongKey')).toEqual(null);
  });
});