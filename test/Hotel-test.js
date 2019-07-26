import Hotel from '../src/Hotel.js'
import chai from 'chai';
import spies from 'chai-spies'
import domUpdates from '../src/domUpdates'
const expect = chai.expect;


describe('hotel', function() {

beforeEach(function() {
    let hotel;
  });
  
  it('should return true', function() {
    let hotel = new Hotel()
    expect(hotel).to.equal(Hotel);
  });
});