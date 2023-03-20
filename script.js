// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
    $("#currentDay").text(dayjs().format("DD MMMM YYYY, h:mm:ss a"))
  
$(function currentHour() {
  $(dayjs().format(HH))
})

let hour =id.split ('-')

    // create number value from the ID, get a value for current time
    // if (hour = currentTime) {
    // addClass("present");
    //  removeClass("past");
    //  removeClass("future");
    //  }

    //   else if (hour < currentHour) {
    //     removeClass("present");
    //     addClass("past");
    //     removeClass("future");
    //    }
    //  else {
    //     removeClass("present");
    //     removeClass("past");
    //     addClass("future");



  
    $(".saveBtn").on("click", function () {
      console.log(this);
      var time = $(this).closest('div').attr('id');
      var plan = $(this).siblings(".description").val(); 
      localStorage.setItem(time, plan);
    })

    $("#hour8 .description").val(localStorage.getItem("hour8"));
    $("#hour9 .description").val(localStorage.getItem("hour9"));
    $("#hour10 .description").val(localStorage.getItem("hour10"));
    $("#hour11 .description").val(localStorage.getItem("hour11"));
    $("#hour12 .description").val(localStorage.getItem("hour12"));
    $("#hour13 .description").val(localStorage.getItem("hour13"));
    $("#hour14 .description").val(localStorage.getItem("hour14"));
    $("#hour15 .description").val(localStorage.getItem("hour15"));
    $("#hour16 .description").val(localStorage.getItem("hour16"));
    $("#hour17 .description").val(localStorage.getItem("hour17"));


  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});

