const chai = require('chai');
const { addition, subtraction, multiplication, division } = require('../maths');

const { expect } = chai;

describe('calculator', () => {
  it('addition 1 + 1 should be equals to 2', () => {
    expect(addition(1, 1)).to.equal(2)
  });

  it('multiplication 2 * 2 should be equals to 4', () => {
    expect(multiplication(2, 2)).to.equal(4)
  });

  it('subtraction 5 - 3 should be equals to 2', () => {
    expect(subtraction(5, 3)).to.equal(2)
  });

  it('division 10 / 2 should be equals to 5', () => {
    expect(division(10, 2)).to.equal(5)
  });
});
