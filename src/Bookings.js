import domUpdates from "./domUpdates";

class Bookings {
  constructor(todaysDate, bookings, rooms) {
    this.todaysDate = todaysDate;
    this.bookings = bookings;
    this.rooms = rooms; 
  }

  findDateTally() {
    let dateTally = this.bookings.reduce((allDates, eachBooking) => {
      if (!allDates[eachBooking.date]) {
        allDates[eachBooking.date] = 1;
      } else {
        allDates[eachBooking.date]++
      }
      return allDates
    }, {})
    return dateTally
  }

  findMostPopularBookingDate() {
    let dateTally = this.findDateTally();

    let popularDate = Object.keys(dateTally).reduce((bestDate, eachDate) => {
      if (dateTally[eachDate] > bestDate.count) {
        bestDate = {
          'eachDate': eachDate,
          'count': dateTally[eachDate]
        }
      }
      return bestDate
    }, {date: '', count: 1})

    return popularDate
  }

  findDateWithMostRoomsAvailable(hotel) {
    let dateBookedLeast;
    let dateTally = this.findDateTally();
    let totalBookingsToday = hotel.findDailyBookingsAllCustomers(this.todaysDate);
    let leastBookedDate = Object.keys(dateTally).reduce((worstDate, eachDate) => {
      if (totalBookingsToday.length < worstDate) {
        dateBookedLeast = eachDate;
        worstDate = totalBookingsToday.length;
      }
      return worstDate;
    }, 51)
    return {date: `${dateBookedLeast}`, count: `${leastBookedDate}` };
  }

  findCustomerBookings(customer, date = this.todaysDate) {  
    let pastDates = [];
    let futureDates = [];
    let todaysDates = []
    let allBookingsForCustomer = this.bookings.filter(booking => {
      return booking.userID === customer;
    });
    allBookingsForCustomer.forEach(booking => {
      if (booking.date < date) {
        pastDates.push(booking)
      } else if (booking.date > date) {
        futureDates.push(booking)
      } else if (booking.date === this.todaysDate) {
        todaysDates.push(booking);
      }
    })
    return [pastDates, futureDates, todaysDates]
  }

  findUnoccupiedRooms(hotel, date = this.todaysDate) { 
    let roomsBookedForDate = hotel.findDailyBookingsAllCustomers(date).map(booking => booking.roomNumber);
   return this.rooms.filter(room => !roomsBookedForDate.includes(room.number));
  }

  determinePercentOccupied(hotel, date = this.todaysDate) { 
    let numberOfRooms = this.rooms.length 
    let roomsBookedForDate = hotel.findDailyBookingsAllCustomers(date).length;
    return Math.floor((roomsBookedForDate / numberOfRooms) * 100) 
  }

  
}

export default Bookings;