/*const expect = require('chai').expect;
const divide = require('../index');

describe('Divide function', () => {
  it('should divide positive integers correctly', () => {
    expect(divide(8, 4)).to.equal(2);
  });

  it('should throw an error when divide by zero', () => {
    expect(() => { divide(8, 0) }).to.throw();
  });
}); */

expect(2).to.equal(2, '2 === 2'); // pass
expect(2).to.equal("2", '2 === "2"'); // fail, wrong types
expect(2).to.equal(3, '2 === 3'); // fail, wrong values
expect('hen').to.equal('Hen', "'hen' === 'Hen'");