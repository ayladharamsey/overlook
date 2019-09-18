import $ from 'jquery';
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
  var input = $(event.target).siblings('input')[0].className; 
  domUpdates.clearInput(input);
})

$('.main-button_submit-date').click(() => {
  let chosenDate = $('.main-input_date').val().replace(/-/gi, "/");
  domUpdates.appendDateInQuestion(chosenDate);
  updateDomWithAlternateDate(chosenDate);
  let input = $(event.target).siblings('input')[0].className;
  domUpdates.clearInput(input);
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
  defaultAllTabs();
}

function determineIfCurrentCustomer(name) {
  let actualCustomer = hotel.customers.filter(customer => customer.name === name);
  if (actualCustomer.length === 1) {
    actualCustomer.forEach(customer => {
      domUpdates.validCustomer();
      findAllCustomerInfo(customer.id);
    })
  } else {
    domUpdates.invalidCustomerName();
  }
}

function createNewCustomer(name) { 
  var newId = hotel.customers.length + 1;
  let customer = new Customer(newId, name);
  hotel.customers.push(customer);
  hotel.findCustomer(newId);
}

function findAllCustomerInfo(customerId) {
  let customerInfo = hotel.findCustomer(customerId);
  let bookingsInfo = bookings.findCustomerBookings(customerId, date);
  let ordersInfo = orders.findCustomerOrders(customerId, date);
  domUpdates.appendChosenCustomerInformation(bookingsInfo, ordersInfo);
  return [customerInfo, bookingsInfo, ordersInfo]
}
 

function defaultAllTabs() {
  let dailyOrders = hotel.findDailyOrdersAllCustomers(date);
  let dailyBookings = hotel.findDailyBookingsAllCustomers(date);
  let popularDate = bookings.findMostPopularBookingDate();
  let percentUnoccupied = bookings.determinePercentOccupied(hotel, date);
  let revenue = orders.totalRevenuePerDay(orders, date);
  let availableBookings = bookings.findDateWithMostRoomsAvailable(hotel) 
  bookings.findUnoccupiedRooms(hotel, date);
  bookings.findDateWithMostRoomsAvailable(hotel);
  domUpdates.appendDefaultOrders(dailyOrders);
  domUpdates.appendDefaultBookings(dailyBookings);
  domUpdates.appendPopularBookingDate(popularDate);
  domUpdates.appendPercentOccupied(percentUnoccupied);
  domUpdates.totalRevenuePerDay(revenue);
  domUpdates.appendAvailableBookings(availableBookings);
}

function updateDomWithAlternateDate(chosenDate) {
  let dailyOrders = hotel.findDailyOrdersAllCustomers(chosenDate);
  let dailyBookings = hotel.findDailyBookingsAllCustomers(chosenDate);
  let percentUnoccupied = bookings.determinePercentOccupied(hotel, chosenDate);
  let revenue = orders.totalRevenuePerDay(orders, chosenDate);
  domUpdates.appendDefaultOrders(dailyOrders);
  domUpdates.appendDefaultBookings(dailyBookings);
  domUpdates.appendPercentOccupied(percentUnoccupied);
  domUpdates.totalRevenuePerDay(revenue);
}


  
