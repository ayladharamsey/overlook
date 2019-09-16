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

  totalSpendOnRoomService(customer, bookings) {
    // for a specific customer
    //need to refactor findCustomerOrders to be able to use this
  }

  totalPerDaySpentOnRoomService(customer, date) {
    // for specific customer on specific day
  }
  
}


export default Orders;