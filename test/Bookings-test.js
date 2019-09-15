import Bookings from '../src/Bookings.js'
import testData from '../data/test-data'
import chai from 'chai';
import spies from 'chai-spies'
const expect = chai.expect;
let booking;


describe('bookings', function() {
  
  beforeEach(function() {
    booking = new Bookings(testData.bookings[0].userID, testData.bookings[0].date, testData.bookings[0].roomNumber)
  });
  
  it('should know the user that booked the room', function() {
    expect(booking.userID).to.equal(1);
  });

  it('should know the date that the room is booked for', function() {
    expect(booking.bookingDate).to.equal('2019/09/14');
  });

  it('should know the room number of the room that is booked', function() {
    expect(booking.roomNumber).to.equal(1);
  });


});