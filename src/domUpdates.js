import $ from 'jquery';

let domUpdates = {

  appendDate(date) {
    $('.nav-date_todays-date').text(date);
  },

  appendChosenUserName(hotel) {
    $('.nav-header_chosen-user').text(hotel.currentCustomer)
  },
  
  



}


export default domUpdates;