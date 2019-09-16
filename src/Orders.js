import domUpdates from "./domUpdates";

class Orders {
  constructor(todaysDate, orders) {
    this.todaysDate = todaysDate;
    this.orders = orders;
  }

  createNewOrder() {

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