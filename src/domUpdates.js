import $ from 'jquery';

let domUpdates = {

  appendDate(date) {
    $('.nav-date_todays-date').text(date);
  },

  appendChosenUserName(name) {
    console.log(name)
    $('.nav-header_chosen-user').text(name)
  }, 



}


export default domUpdates;