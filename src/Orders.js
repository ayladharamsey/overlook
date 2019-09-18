class Orders {
  constructor(todaysDate, orders) {
    this.todaysDate = todaysDate;
    this.orders = orders;
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
    return [pastOrders, futureOrders, todaysOrders]
  }

  totalRevenuePerDay(date = this.todaysDate) {
    let costs = this.orders.filter(order => order.date === date).map(order => order.totalCost);
    return costs.reduce((totalCost, eachCost) => {
      totalCost += eachCost
      return totalCost
    }, 0)
  }
}

export default Orders;