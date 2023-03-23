
$(document).ready(function() {
    $("#currentDay").text(dayjs().format("DD MMMM YYYY, h:mm:ss a"))
  // get the current hour in 24h format
  let currentHour = parseInt(dayjs().format("HH"));
// link function to click event
  $(".saveBtn").on("click", function () {
    var time = $(this).closest('div').attr('id');
    var text = $(this).siblings(".description").val();

    localStorage.setItem(time, text);


  });
//retrieve saved information and reapply to correct div
  $("#hour-8 .description").val(localStorage.getItem("hour-8"));
  $("#hour-9 .description").val(localStorage.getItem("hour-9"));
  $("#hour-10 .description").val(localStorage.getItem("hour-10"));
  $("#hour-11 .description").val(localStorage.getItem("hour-11"));
  $("#hour-12 .description").val(localStorage.getItem("hour-12"));
  $("#hour-13 .description").val(localStorage.getItem("hour-13"));
  $("#hour-14 .description").val(localStorage.getItem("hour-14"));
  $("#hour-15 .description").val(localStorage.getItem("hour-15"));
  $("#hour-16 .description").val(localStorage.getItem("hour-16"));
  $("#hour-17 .description").val(localStorage.getItem("hour-17"));

//split and parse number from ID in divs to use for comparison to current hour
  $(".time-block").each(function () {
    let blockHour = parseInt($(this).attr("id").split("-")[1]);
    console.log(blockHour);
    console.log(currentHour);
    if (blockHour < currentHour) {
      $(this).addClass("past");
    } else if (blockHour === currentHour) {
      $(this).removeClass("past");
      $(this).addClass("present");
    } else {
      $(this).removeClass("past");
      $(this).removeClass("present");
      $(this).addClass("future");
    }
    });
  });




