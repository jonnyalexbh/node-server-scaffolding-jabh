const chai = require('chai');

const { expect } = chai;

describe('common comparators', () => {
  const user = {
    name: 'tankis',
    lastname: 'lopez'
  };

  const user2 = {
    name: 'Daniel',
    lastname: 'Carmona'
  };

  const user3 = {
    name: 'tankis',
    lastname: 'lopez'
  };


  it('equality of elements', () => {
    expect(user).to.deep.equal(user3);
  });

  it('they are not exactly the same', () => {
    expect(user).to.not.equal(user2);
  });
});
