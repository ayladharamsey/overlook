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

  // it('should be able to create a new customer and add them to the customer list', function() {
  //   hotel.createNewCustomer('Mildred Simpson')
  //   expect(testData.users[10]).to.eql({ 
  //     id: 11, 
  //     name: 'Mildred Simpson' 
  //   })
  // }); // moved to index but idk where to test

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

  it('should be able to return the total revenue for a day', function() {
    expect(hotel.totalRevenue()).to.equal(463.25);
  });

});