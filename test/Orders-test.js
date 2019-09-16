import Orders from '../src/Orders.js'
import testData from '../data/test-data'
import chai from 'chai';
import spies from 'chai-spies'
const expect = chai.expect;
let order;


describe('orders', function() {
    
  beforeEach(function() {
    order = new Orders('2019/09/14', testData.roomServices)
  });

  it('should know the date', function() {
    expect(order.todaysDate).to.equal('2019/09/14');
  });

  it('should know the date', function() {
    expect(order.orders).to.equal(testData.roomServices);
  });

  it('should calculate the total revenue of all orders for a date', function() {
    expect(order.totalRevenuePerDay()).to.equal(25.22 );
  });

  it('should be able to find a customers past room service orders', function() { // move to customer
    expect(order.findCustomerOrders(9, '2019/09/14')[0]).to.eql([]);
  });

  it('should be able to find a customers future room service orders', function() { // move to customerœ
    expect(order.findCustomerOrders(9, '2019/09/14')[1]).to.eql([{
      userID: 9,
      date: '2019/09/30',
      food: 'Tasty Wooden Sandwich',
      totalCost: 19.55
    }])
  });

  it('should be able to find a customers todays room service orders', function() { // move to customerœ
    expect(order.findCustomerOrders(9, '2019/09/14')[2]).to.eql([{
      userID: 9,
      date: '2019/09/14',
      food: 'Refined Cotton Sandwich',
      totalCost: 11.67
    }])
  });

});