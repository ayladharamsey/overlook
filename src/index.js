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

$('.nav-button_delete-user').click(() => domUpdates.removeCurrentCustomer());

$('.main-button_submit-date').click(() => {
  domUpdates.appendDateInQuestion($('.main-input_date').val());
  var input = $(event.target).siblings('input')[0].className;
  domUpdates.clearInput(input)
})

$('.main-button_remove-date').click(() => {
  domUpdates.removeDateInQuestion()
})

$('.customer-button_create-customer').click(() => createNewCustomer($('.customer-input_name').val()));

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
  defaultOrdersTab();

}
function determineIfCurrentCustomer(name) {
  hotel.customers.filter(customer => { 
    if (customer.name.includes(name.split(' ')[0] || name.split(' ')[1])) {
      return findAllCustomerInfo(customer.id);
    } else {
      domUpdates.invalidCustomerName(name);//need to write
    }
  })
}

function createNewCustomer(name) { 
  var newId = hotel.customers.length + 1;
  let customer = new Customer(newId, name);
  hotel.customers.push(customer);
  hotel.findCustomer(newId);// do i want this to return out?
}

function findAllCustomerInfo(customerId) {
  hotel.findCustomer(customerId);
  bookings.findCustomerBookings(hotel.currentCustomer.id, date);
  orders.findCustomerOrders(hotel.currentCustomer, date)
  domUpdates.appendChosenCustomerInformation(bookings, orders)
}
 

function defaultOrdersTab() {
  orders.totalRevenuePerDay(orders, date);
  bookings.findUnoccupiedRooms(hotel, date)
  bookings.determinePercentOccupied(hotel, date);
}


  
