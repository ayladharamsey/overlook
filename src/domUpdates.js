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

  removeCurrentCustomer() {
    $('.nav-header_chosen-user').text('').attr('hidden');
  },

  removeDateInQuestion() {
    $('.main-header_date-in-question').text('').attr('hidden');
  },

  invalidCustomerName() {
    $('.customer-list_results').text('Invalid Customer Chosen,please search for an alternate customer or add this customer to the database.')
    $('.customer-button_create-customer').show();
  }, 

  appendChosenCustomerInformation(bookings, orders) {
    this.appendChosenCustomerOrders(orders);
    this.appendChosenCustomerBookings(bookings);
  },

  appendChosenCustomerOrders(orders) {
    //will append currentCustomer's orders
  },

  appendChosenCustomerBookings(bookings) {
    //will append currentCustomer's bookings
  }, 

  totalRevenuePerDay() {
    // will append the revenue per day for all orders 
  }

}


export default domUpdates;