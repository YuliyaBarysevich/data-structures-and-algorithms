'use strict';

const findDuplicate = require('../repeated-word.js');

describe('check', () => {
  const str1 = 'Once upon a time, there was a brave princess who...';
  const str2 = 'It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we had nothing before us, we were all going direct to Heaven, we were all going direct the other way – in short, the period was so far like the present period, that some of its noisiest authorities insisted on its being received, for good or for evil, in the superlative degree of comparison only...';
  const str3 = 'Test string with no repeated words'

  it('should successfully return "a" ', () => {
    expect(findDuplicate(str1)).toEqual('a')
  });

  it('should successfully return "it" ', () => {
    expect(findDuplicate(str2)).toEqual('it')
  });

  it('should successfully return "summer" ', () => {
    expect(findDuplicate(str3)).toEqual('There is no repeated words')
  });
});