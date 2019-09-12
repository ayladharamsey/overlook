import domUpdates from "./domUpdates";
import Customer from "./Customer"
import Bookings from "./Bookings"
import Orders from "./Orders"

class Hotel {
  constructor(customers, rooms, bookings, orders, date) {
    this.customers = customers
    this.rooms = rooms;
    this.bookings = bookings;
    this.orders = orders;
    this.date = date;
  }

  findCurrentCustomer(id) {
    return this.customers.find(customer => customer.id === id)
  }

  createNewCustomer(name) {
    var newId = this.customers.length + 1
    let customer = new Customer(name, newId)
    this.customers.push(customer)
  }

  findCustomerBookings() {

  }

  findCustomerOrders() {

  }
}



export default Hotel;