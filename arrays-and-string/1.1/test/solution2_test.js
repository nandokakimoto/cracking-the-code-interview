import assert from 'assert';
import isUnique from '../solution2';

describe('isUnique', () => {
  it('should return true when all characteres are unique', () => {
    assert(isUnique('abcdef'));
    assert(isUnique('qwerty'));
    assert(isUnique('qazplmwsxoknedcijb'));
    assert(isUnique('123456abcdef7890'));
  });

  it('should return false when duplicated characteres exists', () => {
    assert(!isUnique('abccdef'));
    assert(!isUnique('qazxswedcvfrvtgbyhnujmiklop'));
    assert(!isUnique('123456789abcdefghij1klmnopq'));
  });
});
