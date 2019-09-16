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
    return this.currentCustomer;
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

  findCustomerOrders(date = this.todaysDate) { // this needs to be tested
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

  findUnoccupiedRooms(date = this.todaysDate) {
    let roomsBookedForDate = this.findDailyBookingsAllCustomers().map(booking => booking.roomNumber);
    return this.rooms.filter(room => !roomsBookedForDate.includes(room.number));
  }

  determinePercentOccupied() {
    let numberOfRooms = this.rooms.length 
    let roomsBookedForDate = this.findDailyBookingsAllCustomers().length;
    return Math.floor((roomsBookedForDate / numberOfRooms) * 100) 

  }

  totalRevenue() {
    let roomsBookedForDate = this.findDailyBookingsAllCustomers().map(booking => booking.roomNumber);
    let roomCosts = this.rooms.filter(room => roomsBookedForDate.includes(room.number)).map(room => room.costPerNight)
    let orderCostsForDate = this.findDailyOrdersAllCustomers().map(order => order.totalCost)
    let allCosts = roomCosts.concat(orderCostsForDate)
    return allCosts.reduce((totalCost, eachCost) => {
      totalCost += eachCost
      return totalCost;
    }, 0)
  }
}



export default Hotel;