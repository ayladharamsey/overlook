import domUpdates from "./domUpdates";
import Customer from "./Customer"
import Bookings from "./Bookings"
import Orders from "./Orders"

class Hotel {
  constructor(customers, rooms, bookings, orders, todaysDate) {
    this.customers = customers;
    this.rooms = rooms;
    this.bookings = bookings;
    this.orders = orders;
    this.todaysDate = todaysDate;
    this.currentCustomer;
  }

  findCustomer(id) {
    this.currentCustomer = this.customers.find(customer => customer.id === id)
  }

  createNewCustomer(name) {
    var newId = this.customers.length + 1
    let customer = new Customer(newId, name)
    this.customers.push(customer)
    this.findCustomer(newId)
  }

  findCustomerBookings(date = this.todaysDate) {
    let pastDates = [];
    let futureDates = [];
    let allBookingsForCustomer = this.bookings.filter(booking => {
      return this.currentCustomer.id === booking.userID
    });
    allBookingsForCustomer.forEach(booking => {
      booking.date < date ? pastDates.push(booking) : futureDates.push(booking);
    });
    return [pastDates, futureDates]
  }

  findCustomerOrders(date = this.todaysDate) {
    let pastOrders = [];
    let futureOrders = [];
    let allOrders = this.orders.filter(order => {
      return order.userID === this.currentCustomer.id
    })
    allOrders.forEach(order => {
      order.date < date ? pastOrders.push(order) : futureOrders.push(order)
    })
    return [pastOrders, futureOrders]
  }

  findDailyBookingsAllCustomers(date = this.todaysDate) { // how do i test this dynamically every today'sDate without changing the data?
    return this.bookings.filter(booking => {
      return booking.date === date;
    })
  }

  findDailyOrdersAllCustomers(date = this.todaysDate) { // how do i test this dynamically every today'sDate without changing the data?
    return this.orders.filter(order => {
      return order.date === date;
    })
  }



}



export default Hotel;