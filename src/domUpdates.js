import $ from 'jquery';

let domUpdates = {

  appendDate(date) {
    $('.nav-date_todays-date').text(date);
  },

  appendChosenUserName(name) {
    $('.nav-header_chosen-user').text(name);
  },

  appendDateInQuestion(date) {
    $('.main-header_date-in-question').text(date).removeAttr('hidden');
  },

  clearInput(input) {
    $(`.${input}`).val('');
  },

  removeDateInQuestion() {
    $('.main-header_date-in-question').text('').attr('hidden');
  },

  validCustomer() {
    $('.customer-div_customer-found').text('We have found 1 customer matching that name. Each tab will now display their various information.')
  },

  invalidCustomerName() {
    $('.customer-div_customer-not-found').text('Invalid Customer Chosen,please search for an alternate customer or add this customer to the database.')
    $('.customer-button_create-customer').show();
  }, 

  appendChosenCustomerInformation(bookings, orders) {
    this.appendChosenCustomerOrders(orders);
    this.appendChosenCustomerBookings(bookings);
  },

  appendChosenCustomerOrders(customerOrders) {
    customerOrders.forEach((customerOrder) => {
      $('.orders-list_results').append(`
      Date: ${customerOrder.date} Food: ${customerOrder.food} Cost: $ ${customerOrder.totalCost}`)
    })
  },

  appendChosenCustomerBookings(customerBookings) {
    customerBookings.forEach((customerBooking) => {
      $('.bookings-list_todays-bookings').append(`
      Date: ${customerBooking.date} Room Number: ${customerBooking.roomNumber}`)
    })
  }, 

  totalRevenuePerDay() {
    // will append the revenue per day for all orders 
  },

  customerCreatedMessage(name) {
    $('.customer-div_customer-not-found').text(`${name} is now added to our database!`);
    $('.customer-button_create-customer').hide();
  },

  appendDefaultOrders(dailyOrders) {
    dailyOrders.forEach((dailyOrder) => {
      $('.orders-list_results').append(`
      Date: ${dailyOrder.date} Food: ${dailyOrder.food} Cost: $ ${dailyOrder.totalCost}`)
    })
  },

  appendDefaultBookings(dailyBookings) {
    dailyBookings.forEach((dailyBooking) => {
      $('.bookings-list_todays-bookings').append(`
      Date: ${dailyBooking.date} Room Number: ${dailyBooking.roomNumber}`)
    })
  }

}


export default domUpdates;