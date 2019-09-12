import $ from 'jquery';
import Orders from "../src/Orders.js";
import Bookings from "../src/Bookings.js";
import Hotel from "../src/Hotel.js";
import './css/base.scss';

let hotel;
let usersData = fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/users/users');
let roomsData = fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/rooms/rooms');
let bookingsData = fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/bookings/bookings');
let roomServicesData = fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/room-services/roomServices'); 
const date = () => {
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

  let thisDay = dd + '/' + mm + '/' + yyyy;
  return thisDay;
}

Promise.all([usersData, roomsData, bookingsData, roomServicesData])
  .then(values => Promise.all(values.map(value => value.json())))
  .then(allData => {
    let users = allData.find(data => data.hasOwnProperty('users')).users;
    let rooms = allData.find(data => data.hasOwnProperty('rooms')).rooms;
    let bookings = allData.find(data => data.hasOwnProperty('bookings')).bookings;
    let roomServices = allData.find(data => data.hasOwnProperty('roomServices')).roomServices;
    hotel = new Hotel(users, rooms, bookings, roomServices, date);
  });


  
