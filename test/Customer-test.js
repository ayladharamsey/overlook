import chai from 'chai';
import spies from 'chai-spies'
import customer from '../src/Customer'
import domUpdates from '../src/domUpdates'
const expect = chai.expect;


describe('customer', function() {
    beforeEach(function() {
        let customer = new Customer();
      });
    it('should have an id', function() {
      expect(true).to.equal(true);
    })
  });
