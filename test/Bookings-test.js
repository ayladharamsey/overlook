import Bookings from '../src/Bookings.js'
import testData from '../data/test-data'
import chai from 'chai';
import spies from 'chai-spies'
const expect = chai.expect;
let booking;


describe('bookings', function() {
  
  beforeEach(function() {
    booking = new Bookings('2019/09/14', testData.bookings, testData.rooms)
  });
  
  it('should know the date', function() {
    expect(booking.todaysDate).to.equal('2019/09/14');
  });

  it('should know about all bookings information', function() { // is this a bad test? having it test the thing it's hooked up to rather than that actual data?
    expect(booking.bookings).to.equal(testData.bookings);
  });

  it('should know about all bookings information', function() { // same question as above
    expect(booking.rooms).to.equal(testData.rooms);
  });

  


});