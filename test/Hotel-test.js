import Hotel from '../src/Hotel.js'
import testData from '../data/test-data'
import chai from 'chai';
// import spies from 'chai-spies'
const expect = chai.expect;
let hotel;


describe('hotel', function() {

  beforeEach(function() {
    // how can i test today's date dynamically?
    hotel = new Hotel(testData.users, testData.rooms, testData.bookings, testData.roomServices, '2019/09/14')
    hotel.findCustomer(3)
  });
  
  it('should have access to the customers information', function() {
    expect(hotel.customers).to.equal(testData.users);
  });

  it('should have access to the bookings information', function() {
    expect(hotel.bookings).to.equal(testData.bookings);
  });

  it('should have access to the room information', function() {
    expect(hotel.rooms).to.equal(testData.rooms);
  });

  it('should have access to the orders information', function() {
    expect(hotel.orders).to.equal(testData.roomServices);
  });

  it('should know todays date', function() {
    expect(hotel.todaysDate).to.equal('2019/09/14');
  });

  it('should be able to find a specific customer by id', function() {
    hotel.findCustomer(3)
    expect(hotel.currentCustomer).to.eql({ 
      id: 3, 
      name: 'Sherry Quick' 
    })
  });

  it('should be able to create a new customer and add them to the customer list', function() {
    hotel.createNewCustomer('Mildred Simpson')
    expect(testData.users[10]).to.eql({ 
      id: 11, 
      name: 'Mildred Simpson' 
    })
  });

  it('should be able to find a customers past booking information', function() { // move to customer
    expect(hotel.findCustomerBookings()[0]).to.eql([{ userID: 3, date: '2019/09/02', roomNumber: 6 }])
  });

  it('should be able to find a customers future booking information', function() { // move to customer
    expect(hotel.findCustomerBookings()[1]).to.eql([{ userID: 3, date: '2019/09/25', roomNumber: 3 }])
  });

  it('should be able to find a customers past room service orders', function() { // move to customer
    expect(hotel.findCustomerOrders()[0]).to.eql([{ 
      userID: 3,
      date: '2019/09/02',
      food: 'Awesome Cotton Sandwich',
      totalCost: 20.79 }])
  });

  it('should be able to find a customers future room service orders', function() { // move to customerœ
    expect(hotel.findCustomerOrders()[1]).to.eql([{
      date: "2019/09/25",
      food: "Fantastic Cotton Sandwich",
      totalCost: 17.61, 
      userID: 3
    },
    {
      date: "2019/9/25",
      food: "Refined Metal Sandwich",
      totalCost: 19.3,
      userID: 3
    }])
  });

  it('should be able to find all bookings for todays date', function() {
    expect(hotel.findDailyBookingsAllCustomers()).to.eql([
      { userID: 1, date: '2019/09/14', roomNumber: 1 },
      { userID: 9, date: '2019/09/14', roomNumber: 15 }
    ])
  });

  it('should be able to find all orders for todays date', function() {
    expect(hotel.findDailyOrdersAllCustomers()).to.eql([
      { userID: 1,
        date: '2019/09/14',
        food: 'Practical Concrete Sandwich',
        totalCost: 13.55 },
      { userID: 9,
        date: '2019/09/14',
        food: 'Refined Cotton Sandwich',
        totalCost: 11.67 },
    ])
  });

  it('should should be able to return a list of unoccupied rooms for todays date', function() {
    expect(hotel.findUnoccupiedRooms('2019/09/14')).to.eql([
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

});