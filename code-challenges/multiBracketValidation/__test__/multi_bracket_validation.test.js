'use strict'

const multiBracketValidation = require('../multi_bracket_validation.js')


describe('Testing challenge', () => {
  it('should return TRUE if the brackets in the string are balanced', () => {
    expect(multiBracketValidation('{}(){}')).toBe(true);
    expect(multiBracketValidation('{}{Code}[Fellows](())')).toBe(true);
    expect(multiBracketValidation('()[[Extra Characters]]')).toBe(true);
    expect(multiBracketValidation('{}(){}')).toBe(true);
  });
  it('should return FALSE if the brackets in the string are not balanced', () => {
    expect(multiBracketValidation('[({}]')).toBe(false);
    expect(multiBracketValidation('(](')).toBe(false);
  }); 
});
