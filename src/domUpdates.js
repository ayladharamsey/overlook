import $ from 'jquery';

let domUpdates = {

  appendDate(date) {
    $('.nav-date_todays-date').text(date);
  },

  appendChosenUserName(name) {
    $('.nav-header_chosen-user').text(name)
  }, 
  appendDateInQuestion(date){
    $('.main-header_date-in-question').text(date)
  },

  clearInput(input) {
    $(`.${input}`).val('')
  },

  removeCurrentCustomer() {
    $('.nav-header_chosen-user').text('').attr('hidden')
  }



}


export default domUpdates;