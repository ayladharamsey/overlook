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

  invalidCustomerName(name) {
// append warning if invalid name is put into customer search input
//call create new user with unknown name fn 
  }, 

}


export default domUpdates;