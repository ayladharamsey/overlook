import chai from 'chai';
const expect = chai.expect;
import Customer from '../src/Customer'
import testData from '../data/test-data'
let customer;


describe('Customer class', function() {
  beforeEach(function() {
    customer = new Customer(testData.users[0].id, testData.users[0].name);
  });

  it('should have an id', function() {
    expect(customer.id).to.equal(1);
  })

  it('should have a name', function() {
    expect(customer.name).to.equal('Ayla Dharamsey');
  })
});
