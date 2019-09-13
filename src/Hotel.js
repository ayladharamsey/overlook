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
    this.currentCustomer = this.findCurrentCustomer();
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
    let pastDates = [];
    let futureDates = [];
    let currentCustomer = this.findCurrentCustomer();
    let allBookingsForCustomer = this.bookings.filter(booking => {
      booking.userID === currentCustomer.id
    });
    allBookingsForCustomer.forEach(booking => {
      booking.date < this.date ? pastOrders.push(order) : futureOrders.push(order);
    });
    console.log(pastDates, futureDates)
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