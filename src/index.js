// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you import jQuery into a JS file if you use jQuery in that file
import $ from 'jquery';
import Orders from "../src/Orders.js";
import Bookings from "../src/Bookings.js";
import Hotel from "../src/Hotel.js";

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/base.scss';
import 'normalize.css'

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'
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
