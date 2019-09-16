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

  findUnoccupiedRooms(date = this.todaysDate) { //move to bookings
    let roomsBookedForDate = this.findDailyBookingsAllCustomers().map(booking => booking.roomNumber);
    return this.rooms.filter(room => !roomsBookedForDate.includes(room.number));
  }

  determinePercentOccupied() { // move to bookings
    let numberOfRooms = this.rooms.length 
    let roomsBookedForDate = this.findDailyBookingsAllCustomers().length;
    return Math.floor((roomsBookedForDate / numberOfRooms) * 100) 
  }

  totalRevenue() { // maybe breakout into separate classes
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