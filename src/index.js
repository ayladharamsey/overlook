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
let orders;
let bookings;
// let customer; not sure if i need this yet 


Promise.all([customersData, roomsData, bookingsData, roomServicesData])
  .then(dataSet => Promise.all(dataSet.map(dataSet => dataSet.json())))
  .then(allData => {
    let customers = allData.find(data => data.hasOwnProperty('users')).users;
    console.log(customers)
    let roomInfo = allData.find(data => data.hasOwnProperty('rooms')).rooms;
    let bookingInfo = allData.find(data => data.hasOwnProperty('bookings')).bookings;
    let roomServices = allData.find(data => data.hasOwnProperty('roomServices')).roomServices;
    hotel = new Hotel(customers, roomInfo, bookingInfo, roomServices, date);
    orders = new Orders(date, roomServices);
    bookings = new Bookings(date, bookingInfo, roomInfo)
  })
  .then(() => onLoadHandler());

$('.reset-button').click(() => location.reload())

$('.customer-button_submit-name').click(() => {
  var name = $('.customer-input_name').val()
  $('.nav-header_chosen-user').removeAttr('hidden');
  domUpdates.appendChosenUserName(name)
  determineIfCurrentCustomer(name);
  var input = $(event.target).siblings('input')[0].className; // add this line to other button event handlers 
  domUpdates.clearInput(input)
})

$('.main-button_submit-date').click(() => {
  domUpdates.appendDateInQuestion($('.main-input_date').val());
  var input = $(event.target).siblings('input')[0].className;
  domUpdates.clearInput(input);
});

$('.main-button_remove-date').click(() => {
  domUpdates.removeDateInQuestion();
});

$('.customer-button_create-customer').click(() => {
  let name = $('.nav-header_chosen-user').text()
  createNewCustomer(name);
  domUpdates.customerCreatedMessage(name);
});

$('.list-item').click(function() {
  $('.list-item.active').removeClass('active');
  $(this).addClass('active');
  var panelToShow = $(this).attr('rel')
  $('.main-div_tabs-panel .panel.active').slideUp(300, function() {
    $(this).removeClass('active')
    $('#' + panelToShow).slideDown(300, function () {
      $(this).addClass('active')
    });
  });
})
  
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
  defaultOrdersTab();

}
function determineIfCurrentCustomer(name) {
  hotel.customers.filter(customer => { 
    if (customer.name === name) {
      domUpdates.validCustomer()
      findAllCustomerInfo(customer.id);
    } else if (customer.name === !name) {
      domUpdates.invalidCustomerName();
    }
  });
}

function createNewCustomer(name) { 
  var newId = hotel.customers.length + 1;
  let customer = new Customer(newId, name);
  hotel.customers.push(customer);
  hotel.findCustomer(newId);
}

function findAllCustomerInfo(customerId) {
  let customerInfo = hotel.findCustomer(customerId);
  let bookingsInfo = bookings.findCustomerBookings(hotel.currentCustomer.id, date);
  let ordersInfo = orders.findCustomerOrders(hotel.currentCustomer.id, date)
  domUpdates.appendChosenCustomerInformation(bookings, orders)
  return [customerInfo, bookingsInfo, ordersInfo]
}
 

function defaultOrdersTab() {
  orders.totalRevenuePerDay(orders, date);
  bookings.findUnoccupiedRooms(hotel, date)
  bookings.determinePercentOccupied(hotel, date);
  bookings.findDateWithMostRoomsAvailable(hotel)
}


  
