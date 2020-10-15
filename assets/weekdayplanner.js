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
  };
  // storing data into local storage
  localStorage.setItem("hours", JSON.stringify(hours));

  // loop to display the 9am - 11am
  function dayAndTime() {
    for (var i = 0; i < hours.amHours.length; i++) {
      var newDivClassRow = $("<div class='row block'></div>");
      $(".container").append(newDivClassRow);
      var hourCol = $(`<div class="col-2 time-block">${hours.amHours[i]}:00</div>`);
  
      var textCol = $(
        `<textarea class="col description" placeholder='Enter your events here' id=${hours.amHours[i]}></textarea>`
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
        `<textarea class="col description" placeholder='Enter your events here' id=${hours.pmHours[i]}></textarea>`
      );
      var buttonCol = $(
        `<button class="saveBtn styled" id=${hours.pmHours[i]}><i class="fas fa-save"></i></button>`
      );
      $(newDivClassRow).append(hourCol, textCol, buttonCol);
    }
};
dayAndTime();
  
  function colorChange() {
    $('textarea').each(function () {
        var currentHour = moment().format("HH");
        // var textData = $('textarea').data("#");
        $("#" + currentHour).addClass("present");
        for (let i = 9; i < 18; i++) {
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


// $('#save').on('click', function(){

//   $('input[type="text"]').each(function(){    
//       var id = $(this).attr('id');
//       var value = $(this).val();
//      localStorage.setItem(id, value);

//   });   
// });

// $('#load').on('click', function(){
//   $('input[type="text"]').each(function(){    
//       var id = $(this).attr('id');
//       var value = localStorage.getItem(id);

//       $(this).val(value);

//   }); 
// });

// var saveBtn = $('.saveBtn');
// saveBtn.on('click', function(){
//   var eventId = $(this).attr('id');
//   var eventText = $(this).siblings('.description').val();
//   localStorage.setItem(eventId, eventText);
//   });

$('.saveBtn').on('click', function(){
    var eventId = $(this).attr('id');
    var eventText = $(this).siblings('.description').val();
    localStorage.setItem(eventId, eventText);
});

  
});