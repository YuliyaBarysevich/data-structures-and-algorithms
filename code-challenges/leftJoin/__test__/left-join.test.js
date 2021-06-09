'use strict'

const { Node, LL, Hashtable } = require('../../hashtable/hashtable.js')
const leftJoin = require('../left-join.js')


describe('test left join if keys match in first hashmap and second hashmap', () => {

  let firstHashTable = new Hashtable(3);
  let secondHashTable = new Hashtable(3);

  firstHashTable.add('fond', 'enamored');
  firstHashTable.add('wrath', 'anger');
  firstHashTable.add('diligent', 'employed');


  secondHashTable.add('fond', 'averse');
  secondHashTable.add('wrath', 'delight');
  secondHashTable.add('diligent', 'idle');


  it('should return an array with key-values from first hashmap and apanded values from second hashmap', () => {
    expect(leftJoin(firstHashTable, secondHashTable)[0]).toEqual(['fond', 'enamored', 'averse'])
    expect(leftJoin(firstHashTable, secondHashTable)[1]).toEqual(['wrath', 'anger', 'delight'])
  })

})


