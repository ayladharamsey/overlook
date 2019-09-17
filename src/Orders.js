import domUpdates from "./domUpdates";

class Orders {
  constructor(todaysDate, orders) {
    this.todaysDate = todaysDate;
    this.orders = orders;
  }

  createNewOrder() {

  }

  findCustomerOrders(customer, date = this.todaysDate) {
    let pastOrders = [];
    let futureOrders = [];
    let todaysOrders = [];
    let allOrders = this.orders.filter(order => {
      return order.userID === customer;
    })
    allOrders.forEach(order => {
      if (order.date < date) {
        pastOrders.push(order)
      } else if (order.date > date) {
        futureOrders.push(order)
      } else if (order.date === this.todaysDate) {
        todaysOrders.push(order);
      }
    })
    console.log([pastOrders, futureOrders, todaysOrders])
    return [pastOrders, futureOrders, todaysOrders]
  }

  totalRevenuePerDay() {
    let costs = this.orders.filter(order => order.date === this.todaysDate).map(order => order.totalCost);
    return costs.reduce((totalCost, eachCost) => {
      totalCost += eachCost
      return totalCost
    }, 0)
  }

  findTotalSpendOnRoomService(orders, id) {
    //find total spent on room service per customer
  }

  findTotalPerDayPerCustomer(orders, id, date) {

  }
  
}


export default Orders;