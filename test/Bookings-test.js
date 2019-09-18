import Bookings from '../src/Bookings.js'
import Hotel from '../src/Hotel'
import testData from '../data/test-data'
import chai from 'chai';
import spies from 'chai-spies'
const expect = chai.expect;
let booking;
let hotel;


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

  it('should be able to find a customers past booking information', function() { 
    expect(booking.findCustomerBookings(1, '2019/09/14')[0]).to.eql([])
  });

  it('should be able to find a customers future booking information', function() { 
    expect(booking.findCustomerBookings(1, '2019/09/14')[1]).to.eql([{ userID: 1, date: '2019/09/30', roomNumber: 4 },
      { userID: 1, date: '2019/09/30', roomNumber: 18 }])
  });

  it('should be able to find a customers todays booking information', function() { 
    expect(booking.findCustomerBookings(1, '2019/09/14')[2]).to.eql([{ userID: 1, date: '2019/09/14', roomNumber: 1 }])
  });
  
  it('should should be able to return a list of unoccupied rooms for todays date', function() {
    hotel = new Hotel(testData.users, testData.rooms, testData.bookings, testData.roomServices, '2019/09/14');
    expect(booking.findUnoccupiedRooms(hotel, '2019/09/14')).to.eql([
      {
        number: 2,
        roomType: 'single room',
        bidet: true,
        bedSize: 'full',
        numBeds: 1,
        costPerNight: 228.01
      },
      {
        number: 3,
        roomType: 'suite',
        bidet: true,
        bedSize: 'twin',
        numBeds: 1,
        costPerNight: 275.99
      },
      {
        number: 4,
        roomType: 'junior suite',
        bidet: false,
        bedSize: 'full',
        numBeds: 1,
        costPerNight: 177.03
      },
      {
        number: 5,
        roomType: 'junior suite',
        bidet: false,
        bedSize: 'king',
        numBeds: 2,
        costPerNight: 246.65
      },
      {
        number: 6,
        roomType: 'suite',
        bidet: false,
        bedSize: 'king',
        numBeds: 1,
        costPerNight: 211.42
      },
      {
        number: 7,
        roomType: 'residential suite',
        bidet: false,
        bedSize: 'full',
        numBeds: 2,
        costPerNight: 376.56
      },
      {
        number: 8,
        roomType: 'suite',
        bidet: false,
        bedSize: 'full',
        numBeds: 1,
        costPerNight: 177.04
      },
      {
        number: 9,
        roomType: 'suite',
        bidet: true,
        bedSize: 'twin',
        numBeds: 1,
        costPerNight: 327.76
      },
      {
        number: 10,
        roomType: 'single room',
        bidet: false,
        bedSize: 'queen',
        numBeds: 2,
        costPerNight: 296.48
      },
      {
        number: 11,
        roomType: 'single room',
        bidet: true,
        bedSize: 'queen',
        numBeds: 1,
        costPerNight: 216.05
      },
      {
        number: 12,
        roomType: 'single room',
        bidet: false,
        bedSize: 'queen',
        numBeds: 1,
        costPerNight: 247.86
      },
      {
        number: 13,
        roomType: 'residential suite',
        bidet: false,
        bedSize: 'full',
        numBeds: 1,
        costPerNight: 372.83
      },
      {
        number: 14,
        roomType: 'junior suite',
        bidet: false,
        bedSize: 'twin',
        numBeds: 2,
        costPerNight: 207.64
      },
      {
        number: 16,
        roomType: 'junior suite',
        bidet: true,
        bedSize: 'king',
        numBeds: 2,
        costPerNight: 116.19
      },
      {
        number: 17,
        roomType: 'juinor suite',
        bidet: false,
        bedSize: 'full',
        numBeds: 1,
        costPerNight: 216.05
      },
      {
        number: 18,
        roomType: 'suite',
        bidet: true,
        bedSize: 'twin',
        numBeds: 2,
        costPerNight: 200.05
      }
    ])
  });

  it('should be able to return the percent occupied', function() {
    hotel = new Hotel(testData.users, testData.rooms, testData.bookings, testData.roomServices, '2019/09/14')
    expect(booking.determinePercentOccupied(hotel, '2019/09/14')).to.equal(11);
  });

  it('should be able to return the percent occupied', function() {
    hotel = new Hotel(testData.users, testData.rooms, testData.bookings, testData.roomServices, '2019/09/14')
    expect(booking.findUnoccupiedRooms(hotel, '2019/09/14')).to.eql([
      {
        number: 2,
        roomType: 'single room',
        bidet: true,
        bedSize: 'full',
        numBeds: 1,
        costPerNight: 228.01
      },
      {
        number: 3,
        roomType: 'suite',
        bidet: true,
        bedSize: 'twin',
        numBeds: 1,
        costPerNight: 275.99
      },
      {
        number: 4,
        roomType: 'junior suite',
        bidet: false,
        bedSize: 'full',
        numBeds: 1,
        costPerNight: 177.03
      },
      {
        number: 5,
        roomType: 'junior suite',
        bidet: false,
        bedSize: 'king',
        numBeds: 2,
        costPerNight: 246.65
      },
      {
        number: 6,
        roomType: 'suite',
        bidet: false,
        bedSize: 'king',
        numBeds: 1,
        costPerNight: 211.42
      },
      {
        number: 7,
        roomType: 'residential suite',
        bidet: false,
        bedSize: 'full',
        numBeds: 2,
        costPerNight: 376.56
      },
      {
        number: 8,
        roomType: 'suite',
        bidet: false,
        bedSize: 'full',
        numBeds: 1,
        costPerNight: 177.04
      },
      {
        number: 9,
        roomType: 'suite',
        bidet: true,
        bedSize: 'twin',
        numBeds: 1,
        costPerNight: 327.76
      },
      {
        number: 10,
        roomType: 'single room',
        bidet: false,
        bedSize: 'queen',
        numBeds: 2,
        costPerNight: 296.48
      },
      {
        number: 11,
        roomType: 'single room',
        bidet: true,
        bedSize: 'queen',
        numBeds: 1,
        costPerNight: 216.05
      },
      {
        number: 12,
        roomType: 'single room',
        bidet: false,
        bedSize: 'queen',
        numBeds: 1,
        costPerNight: 247.86
      },
      {
        number: 13,
        roomType: 'residential suite',
        bidet: false,
        bedSize: 'full',
        numBeds: 1,
        costPerNight: 372.83
      },
      {
        number: 14,
        roomType: 'junior suite',
        bidet: false,
        bedSize: 'twin',
        numBeds: 2,
        costPerNight: 207.64
      },
      {
        number: 16,
        roomType: 'junior suite',
        bidet: true,
        bedSize: 'king',
        numBeds: 2,
        costPerNight: 116.19
      },
      {
        number: 17,
        roomType: 'juinor suite',
        bidet: false,
        bedSize: 'full',
        numBeds: 1,
        costPerNight: 216.05
      },
      {
        number: 18,
        roomType: 'suite',
        bidet: true,
        bedSize: 'twin',
        numBeds: 2,
        costPerNight: 200.05
      }
    ]);
  });

  it('should find the most popular date to book', function() { 
    expect(booking.findMostPopularBookingDate()).to.eql({ eachDate: '2019/09/25', count: 3 });
  });

  it('should be able to determine how many stays are in each room', function() { 
    expect(booking.findDateTally()).to.eql({
      '2019/09/14': 2,
      '2019/09/20': 1,
      '2019/09/25': 3,
      '2019/09/30': 3,
      '2019/09/02': 2,
      '2019/09/23': 1,
      '2019/09/27': 1,
      '2019/09/21': 1,
      '2019/09/22': 2,
      '2019/09/06': 1,
      '2019/09/01': 1
    });
  });

  it('should find the date with the most available rooms', function() { 
    hotel = new Hotel(testData.users, testData.rooms, testData.bookings, testData.roomServices, '2019/09/14')
    expect(booking.findDateWithMostRoomsAvailable(hotel)).to.eql({ date: '2019/09/14', count: '2' });
  });
});