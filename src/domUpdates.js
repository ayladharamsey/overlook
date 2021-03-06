import $ from 'jquery';

let domUpdates = {

  appendDate(date) {
    $('.nav-date_todays-date').text(date);
  },

  appendChosenUserName(name) {
    $('.chosen-name').text(name);
  },

  appendDateInQuestion(date) {
    $('.main-header_date-in-question').text(date).removeAttr('hidden');
  },

  clearInput(input) {
    $(`.${input}`).val('');
  },

  validCustomer() {
    $('.customer-div_customer-found').text('We have found 1 customer matching that name. Each tab will now display their various information.');
  },

  invalidCustomerName() {
    $('.customer-div_customer-not-found').text('Invalid Customer Chosen,please search for an alternate customer or add this customer to the database.');
    $('.customer-button_create-customer').show();
  }, 

  appendChosenCustomerInformation(bookings, orders) {
    this.appendChosenCustomerOrders(orders);
    this.appendChosenCustomerBookings(bookings);
  },

  appendChosenCustomerOrders(customerOrders) {
    customerOrders.forEach((customerOrder) => {
      if (customerOrder.length > 0 ) {
        customerOrder.forEach(item => {
          $('.orders-list_customer-results').append(`
          Date: ${item.date} Food: ${item.food} Cost: $ ${item.totalCost}<br>`);
          $('.orders-list_customer-results').show();
          $('.orders-list_results').hide();
        });      
      }
    });
  },

  appendChosenCustomerBookings(customerBookings) {
    customerBookings.forEach((customerBooking) => {
      if (customerBooking.length > 0 ) {
        customerBooking.forEach(item => {
          $('.bookings-list_customer-bookings').append(`
          Date: ${item.date} Room Number: ${item.roomNumber}<br>`);
          $('.bookings-list_customer-bookings').show();
          $('.bookings-list_todays-bookings').hide();
          $('.bookings-header_popular-date').hide();
          $('.bookings-list_available-bookings').hide();
        });       
      }
    });
  }, 

  totalRevenuePerDay(revenue) {
    $('.total-revenue').text(revenue);
  },

  customerCreatedMessage(name) {
    $('.customer-div_customer-not-found').text(`${name} is now added to our database!`);
    $('.customer-button_create-customer').hide();
  },

  appendDefaultOrders(dailyOrders) {
    if (dailyOrders.length > 0) {
      dailyOrders.forEach((dailyOrder) => {
        $('.orders-list_results').append(`
        Date: ${dailyOrder.date} Food: ${dailyOrder.food} Cost: $ ${dailyOrder.totalCost}<br>`);
      })
    } else {
      $('.orders-list_results').append(`No orders for this date`);
    }   
  },

  appendDefaultBookings(dailyBookings) {
    dailyBookings.forEach((dailyBooking) => {
      $('.bookings-list_todays-bookings').append(`
      Date: ${dailyBooking.date} Room Number: ${dailyBooking.roomNumber}<br>`);
    });
  },

  appendPopularBookingDate(date) {
    $('.bookings-header_popular-date').append(
      `${date.eachDate}`
    );
  },

  appendPercentOccupied(percentage) {
    $('.percent-occupied').text(percentage);
  }, 

  appendAvailableBookings(availableBookings) {
    availableBookings.forEach(availableBooking => {
      $('.bookings-list_available-bookings').append(`
      Room Type : ${availableBooking.roomType} Bidet: ${availableBooking.bidet}
      Bed Size: ${availableBooking.bedSize} Number of Beds: ${availableBooking.numBeds}
      Cost Per Night: ${availableBooking.costPerNight} 
      <button class="book-room" data-id = ${availableBooking.number}> Book </button> <br>`);
    });  
  },

  unbookButtonChange(room) {
    $(`[data-id = "${room}"]`).text('Unbook');
  },

  appendChosenDateOrders(dailyOrders) {
    $('.orders-list_chosen-date').show();
    $('.orders-list_results').hide();
    if (dailyOrders.length > 0) {
      dailyOrders.forEach((dailyOrder) => {
        $('.orders-list_chosen-date').append(`
        Date: ${dailyOrder.date} Food: ${dailyOrder.food} Cost: $ ${dailyOrder.totalCost}<br>`)
      });
    } else {
      $('.orders-list_chosen-date').append(`No orders for this date`);
    }   
  },

  appendChosenDateBookings(dailyBookings) {
    $('.bookings-list_chosen-date-bookings').show();
    $('.bookings-header_popular-date').hide();
    $('.bookings-list_todays-bookings').hide();
    if (dailyBookings.length > 0) {
      dailyBookings.forEach((dailyBooking) => {
        $('.bookings-list_chosen-date-bookings').append(`
        Date: ${dailyBooking.date} Room Number: ${dailyBooking.roomNumber}<br>`)
      });
    } else {
      $('.bookings-list_chosen-date-bookings').append(` We have no bookings for this date`);
    }
  },

  appendChosenDateOccupied(percentage) {
    $('.percent-occupied-chosen').show();
    $('.percent-occupied-chosen').text(percentage);
  },

  totalChosenDateRevenuePerDay(revenue) {
    $('.main-header_total-revenue').hide();
    $('.main-header_total-revenue-chosen').show();
    $('.total-revenue-chosen').text(revenue);

  },

  appendChosenDateBookingsUnoccupied(unoccupiedRooms) {
    $('.bookings-list_available-bookings').hide();
    $('.bookings-list_available-chosen-date').show();
    unoccupiedRooms.forEach(unoccupiedRoom => {
      $('.bookings-list_available-chosen-date').append(`
      Room Type : ${unoccupiedRoom.roomType} Bidet: ${unoccupiedRoom.bidet}
      Bed Size: ${unoccupiedRoom.bedSize} Number of Beds: ${unoccupiedRoom.numBeds}
      Cost Per Night: ${unoccupiedRoom.costPerNight} 
      <button class="book-room" data-id = ${unoccupiedRoom.number}> Book </button> <br>`);
    });  
  }
}

export default domUpdates;