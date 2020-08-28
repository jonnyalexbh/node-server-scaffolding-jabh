const chai = require('chai');
const { add, subtract, multiply, divide } = require('../maths');

const { expect } = chai;

describe('calculator', () => {
  it('addition 1 + 1 should be equals to 2', () => {
    expect(add(1, 1)).to.equal(2)
  });

  it('subtraction 5 - 3 should be equals to 2', () => {
    expect(subtract(5, 3)).to.equal(2)
  });

  it('multiplication 2 * 2 should be equals to 4', () => {
    expect(multiply(2, 2)).to.equal(4)
  });

  it('division 10 / 2 should be equals to 5', () => {
    expect(divide(10, 2)).to.equal(5)
  });
});
