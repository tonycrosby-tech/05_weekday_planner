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
    amHours: [9, 10, 11],
    pmHours: [12, 13, 14, 15, 16, 17],
    hour: [9, 10, 11, 12, 13, 14, 15, 16, 17],
  };
  // defining the conversions.
  var conversion = {
    amHour: [9, 10, 11],
    pmHour: [12, 13, 14, 15, 16, 17],
  };

  var hourColors = [9, 10, 11, 12, 13, 14, 15, 16, 17]


  // storing data into local storage
  localStorage.setItem("hours", JSON.stringify(conversion));

  // loop to display the 9am - 11am
  for (var i = 0; i < hours.amHours.length; i++) {
    var newDivClassRow = $("<div class='row block'></div>");
    $(".container").append(newDivClassRow);
    var hourCol = $(`<div class="col-2 time-block">${hours.amHours[i]}:00</div>`);

    var textCol = $(
      `<textarea class="col description" placeholder='Enter your events here' id=${conversion.amHour[i]}></></textarea>`
    );
    var buttonCol = $(
      `<button class="saveBtn styled" id=${hours.amHours[i]}><i class="fas fa-save"></i></button>`
    );
    $(newDivClassRow).append(hourCol, textCol, buttonCol);
  }
  // loop to display the 12pm - 5pm
  for (var i = 0; i < hours.pmHours.length; i++) {
    var newDivClassRow = $("<div class='row block'></div>");
    $(".container").append(newDivClassRow);

    var hourCol = $(`<div class='col-2 time-block'>${hours.pmHours[i]}:00</div>`);

    var textCol = $(
      `<textarea class="col description" placeholder='Enter your events here' id=${conversion.pmHour[i]}></textarea>`
    );
    var buttonCol = $(
      `<button class="saveBtn styled" id=${hours.pmHours[i]}><i class="fas fa-save"></i></button>`
    );
    $(newDivClassRow).append(hourCol, textCol, buttonCol);
  }
  // storing data to local storage
  $("[id]").each(function () {
    $(this).val(localStorage.getItem($(this).attr("id")));
  });
  // storing data into local storage
  $("[id]").on("keyup", function (itm) {
    localStorage.setItem($(this).attr("id"), $(this).val().trim());
  });

  function colorChange() {
    $('textarea').each(function () {
        var currentHour = moment().format("HH");
        // var textData = $('textarea').data("id");
        $("#" + currentHour).addClass("present");
        for (let i = 7; i < 18; i++) {
          if (currentHour < i) {
            $("#" + i).addClass("future");
          } else if (currentHour > i) {
            $("#" + i).addClass("past");
          }
        }
        // console.log(textData);
        // console.log(currentHour);
    });
};
colorChange();
});