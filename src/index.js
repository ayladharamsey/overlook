//event handling 

import $ from 'jquery';
// import 'jq-accordion';
import domUpdates from './domUpdates';
import Orders from "../src/Orders.js";
import Bookings from "../src/Bookings.js";
import Customer from "../src/Customer.js";
import Hotel from "../src/Hotel.js";
import './css/base.scss';

let customersData = fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/users/users');
let roomsData = fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/rooms/rooms');
let bookingsData = fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/bookings/bookings');
let roomServicesData = fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/room-services/roomServices'); 
let date = getDate();
let hotel = 'potato';

Promise.all([customersData, roomsData, bookingsData, roomServicesData])
  .then(dataSet => Promise.all(dataSet.map(dataSet => dataSet.json())))
  .then(allData => {
    let customers = allData.find(data => data.hasOwnProperty('users')).users;
    let rooms = allData.find(data => data.hasOwnProperty('rooms')).rooms;
    let bookings = allData.find(data => data.hasOwnProperty('bookings')).bookings;
    let roomServices = allData.find(data => data.hasOwnProperty('roomServices')).roomServices;
    hotel = new Hotel(customers, rooms, bookings, roomServices, date);
    })
  .then(() => onLoadHandler());
  
$('.reset-button').click(() => location.reload())


$('.customer-button_submit-name').click(() => {
  $('.nav-header_chosen-user').removeAttr('hidden');
  domUpdates.appendChosenUserName($('.customer-input_name').val())
  var input = $(event.target).siblings('input')[0].className; // add this line to other button event handlers 
  domUpdates.clearInput(input)
})

$('.nav-button_delete-user').click(() => {
  domUpdates.removeCurrentCustomer();
})

$('.main-button_submit-date').click(() => {
  domUpdates.appendDateInQuestion($('.main-input_date').val());
  var input = $(event.target).siblings('input')[0].className;
  domUpdates.clearInput(input)
})

// $('.accordion').accordion({
//   collapsible: true, active: true
// })
  
function getDate() {
  let today = new Date();
  let dd = today.getDate();
  let mm = today.getMonth() + 1;
  let yyyy = today.getFullYear();

  if (dd < 10) {
    dd = '0' + dd
  }

  if (mm < 10) {
    mm = '0' + mm
  }

  let thisDay = yyyy + '/' + mm + '/' + dd;
  return thisDay;
}


function onLoadHandler() {
  domUpdates.appendDate(date);

}



  
