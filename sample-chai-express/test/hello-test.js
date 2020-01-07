const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app');

const { expect } = chai;
chai.use(chaiHttp);

describe('test our hello world with chai', () => {
  it('you must respond to the get method', (done) => {
    chai
      .request(app).get('/sample-test')
      .then((res) => {
        expect(res.status).to.be.equal(200);
        expect(res.text).to.be.equal('our first test with chai');
        done();
      });
  });
});
