import $ from 'jquery';
import Orders from "../src/Orders.js";
import Bookings from "../src/Bookings.js";
import Hotel from "../src/Hotel.js";
import './css/base.scss';
import 'normalize.css'

$(document).ready(function () {
  let orders;
  let bookings;
  let hotel;


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
});
