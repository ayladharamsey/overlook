import Orders from '../src/Orders.js'
import testData from '../data/test-data'
import chai from 'chai';
import spies from 'chai-spies'
const expect = chai.expect;
let order;


describe('orders', function() {
    
  beforeEach(function() {
    order = new Orders(testData.roomServices[0].userID, testData.roomServices[0].date, testData.roomServices[0].food, testData.roomServices[0].totalCost)
  });
  
  it('should know the customer who ordered room service', function() {
    expect(order.userID).to.equal(1);
  });

  it('should know the service date of the room service', function() {
    expect(order.serviceDate).to.equal('2019/09/14');
  });

  it('should know the food that was ordered', function() {
    expect(order.food).to.equal('Practical Concrete Sandwich');
  });

  it('should know how much the total order cost ', function() {
    expect(order.cost).to.equal(13.55);
  });

  it('should know how much the total order cost ', function() {
    expect(order.cost).to.equal(13.55);
  });

  it('should calculate the total revenue of all orders for a date', function() {
    expect(order.totalRevenuePerDay()).to.equal();
  });
});