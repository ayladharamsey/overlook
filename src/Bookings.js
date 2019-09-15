import domUpdates from "./domUpdates";

class Bookings {
  constructor(userID, bookingDate, roomNumber) {
    this.userID = userID;
    this.bookingDate = bookingDate;
    this.roomNumber = roomNumber;
  }

  findMostPopularBookingDate() {
    this.bookings.sort((a,b) => {
      return a.date - b.date 
    })
  }
  
}

export default Bookings;