'use strict';

const assert = require('assert');
const utils = require('..');

describe('test/index.test.js', () => {

  it('should sayHi', () => {
    assert(utils.sayHi() === 'hi, anonymous');
    assert(utils.sayHi('tz') === 'hi, tz');
  });
});
