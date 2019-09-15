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

  totalSpendOnRoomService(customer) {
    // for a specific customer
  }

  totalPerDaySpentOnRoomService(customer, date) {
    // for specific customer on specific day
  }
  
}


export default Orders;