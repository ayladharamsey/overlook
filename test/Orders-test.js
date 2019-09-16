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
});