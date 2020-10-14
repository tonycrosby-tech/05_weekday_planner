// ## need input field 9am etc.
// ## changes from different days
// ## tasks are saved, each day
// ## 9am-5pm

// # moment.js library

// current date and time
// var today = moment().format("MM/DD/YYYY HH:mm");
// var x = document.getElementById("currentDay");
// x.innerHTML = today;

// using a format

// today = moment("MM/DD/YYYY HH:mm");

// $("<div>")

// })

// $(document).ready(function () {
// // inputting the correct date.
// var today = moment().format("dddd, MMMM Do YYYY");
// var CURRENT_DAY = document.getElementById("currentDay");

// CURRENT_DAY.innerHTML = today;

// // defining the time of days for the planner.
// var hours = {
// amHours: [9, 10, 11],
// pmHours: [12, 1, 2, 3, 4, 5],
// };

// // defining the time of day to color in the planner.
// var colorChange = {
// amColorHours: [9, 10, 11],
// pmColorHours: [12, 1, 2, 3, 4, 5],
// };

$(document).ready(function () {
  // inputting the correct date.
  var today = moment().format("dddd, MMMM Do YYYY");
  var CURRENT_DAY = document.getElementById("currentDay");
  var info = "Work Day Scheduler";

  CURRENT_DAY.innerHTML = today;

  localStorage.setItem("info", JSON.stringify(info));
  localStorage.setItem("today", JSON.stringify(today));

  //end of loop

  // defining the time of days for the planner.
  var hours = {
    amHours: ["9:00", "10:00", "11:00"],
    pmHours: ["12:00", "13:00", "14:00", "15:00", "16:00", "17:00"],
    hour: [9, 10, 11, 12, 13, 14, 15, 16, 17],
  };
  // defining the conversions.
  var conversion = {
    amHour: ["9am", "10am", "11am"],
    pmHour: ["12pm", "1pm", "2pm", "3pm", "4pm", "5pm"],
  };


  // storing data into local storage
  localStorage.setItem("hours", JSON.stringify(conversion));

  // loop to display the 9am - 11am
  for (var i = 0; i < hours.amHours.length; i++) {
    var newDivClassRow = $("<div class='row block'></div>");
    $(".container").append(newDivClassRow);
    var hourCol = $(`<div class="col-2 time-block">${hours.amHours[i]}</div>`);

    var textCol = $(
      `<input class="col description" placeholder='Enter your events here' data-store=${conversion.amHour[i]}></></input>`
    );
    var buttonCol = $(
      `<button class="saveBtn styled" data-store=${hours.amHours[i]}><i class="fas fa-save"></i></button>`
    );
    $(newDivClassRow).append(hourCol, textCol, buttonCol);
  }
  // loop to display the 12pm - 5pm
  for (var i = 0; i < hours.pmHours.length; i++) {
    var newDivClassRow = $("<div class='row block'></div>");
    $(".container").append(newDivClassRow);
    var hourCol = $(`<div class='col-2 time-block'>${hours.pmHours[i]}</div>`);

    var textCol = $(
      `<input class="col textCol description" placeholder='Enter your events here' data-store=${conversion.pmHour[i]}></input>`
    );
    var buttonCol = $(
      `<button class="saveBtn styled" data-store=${hours.pmHours[i]}><i class="fas fa-save"></i></button>`
    );
    $(newDivClassRow).append(hourCol, textCol, buttonCol);
  }
  // storing data to local storage
  $("[data-store]").each(function () {
    $(this).val(localStorage.getItem($(this).attr("data-store")));
  });
  // storing data into local storage
  $("[data-store]").on("keyup", function (itm) {
    localStorage.setItem($(this).attr("data-store"), $(this).val().trim());
  });

// time function
function time() {

  // variable "currentHour" holds current hour.
  var currentHour = moment().hours();

  // function for each class block to past, present, or future
  $(".row").each(function () {

      // variable "hour" holds data-store hour from class block and pareInt is used to change it from a string to an integer.
      var hour = parseInt($(this).attr("hours.hour"));

      // if in the past hour's
      if (hour < currentHour) {
          // adds grey to blocks
          $(this).addClass("past");
      }

      //else if in the present hour
      else if (hour === currentHour) {
          // removes grey to blocks
          $(this).removeClass("past");
          // adds red to blocks
          $(this).addClass("present");
      }

      // else if in the future's
      else {
          // removes grey to blocks
          $(this).removeClass("past");
          // removes red to blocks
          $(this).removeClass("present");
          // adds green to blocks
          $(this).addClass("future");
      }

  });

};

// call the funtion time()
time();
});
