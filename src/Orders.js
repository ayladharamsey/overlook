import domUpdates from "./domUpdates";

class Orders {
  constructor(userID, serviceDate, food, cost) {
    this.userID = userID;
    this.serviceDate = serviceDate;
    this.food = food;
    this.cost = cost;
  }

  createNewOrder() {

  }

  totalRevenuePerDay(orders, date) {
    //all revenue for a specific date
  }

  findTotalSpendOnRoomService(orders, id) {
    //find total spent on room service per customer
  }

  findTotalPerDayPerCustomer(orders, id, date) {

  }
  
}


export default Orders;