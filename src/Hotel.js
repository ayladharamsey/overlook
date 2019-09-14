import domUpdates from "./domUpdates";
import Customer from "./Customer"
import Bookings from "./Bookings"
import Orders from "./Orders"

class Hotel {
  constructor(customers, rooms, bookings, orders, date) {
    this.customers = customers;
    this.rooms = rooms;
    this.bookings = bookings;
    this.orders = orders;
    this.date = date;
    this.currentCustomer;
  }

  findCustomer(id) {
    this.currentCustomer = this.customers.find(customer => customer.id === id)
  }

  createNewCustomer(name) {
    var newId = this.customers.length + 1
    let customer = new Customer(newId, name)
    this.customers = this.customers.push(customer)
  }

  findCustomerBookings() {
    let pastDates = [];
    let futureDates = [];
    let allBookingsForCustomer = this.bookings.filter(booking => {
      return this.currentCustomer.id === booking.userID
    });
    allBookingsForCustomer.forEach(booking => {
      booking.date < this.date ? pastDates.push(booking) : futureDates.push(booking);
    });
    return [pastDates, futureDates]

  }

  findCustomerOrders() {
    let pastOrders = [];
    let futureOrders = [];
    let currentCustomer = this.findCurrentCustomer();
    let allOrders = this.orders.filter(order => {
      order.userID === currentCustomer.id
    })
    allOrders.forEach(order => {
      order.date < this.date ? pastOrders.push(order) : futureOrders.push(order)
    })
    return [pastOrders, futureOrders]
  }
}



export default Hotel;