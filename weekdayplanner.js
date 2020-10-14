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

  $("[data-store]").each(function () {
    $(this).val(localStorage.getItem($(this).attr("data-store")));
  });
  // storing data into local storage
  $("[data-store]").on("keyup", function (itm) {
    localStorage.setItem($(this).attr("data-store"), $(this).val().trim());
  });

  //adds to class id of current hour "present"

  //gets current hour in military format
  curhour = moment().format("HH:mm");
  //adds to class id of current hour "present"
  $("#" + curhour).addClass("present");
  //loop to change future time slots to present
  for (let i = 9; i < 17; i++) {
    if (curhour < i) {
      $("#" + i).addClass("future");
    } else if (curhour > i) {
      $("#" + i).addClass("past");
    }
  }

  //end of loop

  // defining the time of days for the planner.
  var hours = {
    amHours: ["9:00", "10:00", "11:00"],
    pmHours: ["12:00", "13:00", "14:00", "15:00", "16:00", "17:00"],
  };
  // converting military time to standard time in localstorage
  console.log(
    "Check in local Storage to see the conversion when clicked on save! "
  );
  // defining the time of day to color in the planner.
  var colorChange = {
    amColorHours: ["9am", "10am", "11am"],
    pmColorHours: ["12pm", "1pm", "2pm", "3pm", "4pm", "5pm"],
  };
  // storing data into local storage
  localStorage.setItem("hours", JSON.stringify(hours));

  // loop to display the 9am - 11am
  for (var i = 0; i < hours.amHours.length; i++) {
    var newDivClassRow = $("<div class='row'></div>");
    $(".container").append(newDivClassRow);
    var hourCol = $(`<div class="col-2 time-block">${hours.amHours[i]}</div>`);

    var textCol = $(
      `<textarea class="col description" placeholder='Enter your events here' data-store=${colorChange.amColorHours[i]}></textarea>`
    );
    var buttonCol = $(
      `<button class="saveBtn" data-store=${colorChange.amColorHours[i]}>Save</button>`
    );
    $(newDivClassRow).append(hourCol, textCol, buttonCol);
  }
  // loop to display the 12pm - 5pm
  for (var i = 0; i < hours.pmHours.length; i++) {
    var newDivClassRow = $("<div class='row'></div>");
    $(".container").append(newDivClassRow);
    var hourCol = $(`<div class='col-2 time-block'>${hours.pmHours[i]}</div>`);

    var textCol = $(
      `<textarea class="col description" placeholder='Enter your events here' data-store=${colorChange.pmColorHours[i]}></textarea>`
    );
    var buttonCol = $(
      `<button class="saveBtn" data-store=${colorChange.pmColorHours[i]}>Save</button>`
    );
    $(newDivClassRow).append(hourCol, textCol, buttonCol);
  }

  $(".saveBtn").each(function () {
    $(this).val(localStorage.getItem($(this).attr("data-store")));
  });
  // storing data into local storage
  $(".saveBtn").on("click", function (itm) {
    localStorage.setItem($(this).attr("data-store"), $(this).val().trim());
  });
});
