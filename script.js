
$(function () {
    $("#currentDay").text(dayjs().format("DD MMMM YYYY, h:mm:ss a"))
  
  let currentHour = parseInt(dayjs().format("HH"));

  $(".time-block").each(function () {
  });

  let blockHour = parseInt($(this).attr("id").split("hour")[1]);

  if (blockHour === currentHour) {
    $(this).children(".description").addClass("present");
  } else if (blockHour < currentHour) {
    $(this).children(".description").addClass("past");
  } else {
    $(this).children(".description").addClass("future");
  }

  $(".saveBtn").on("click", function () {
    var time = $(this).closest('div').attr('id');
    var plan = $(this).siblings(".description").val();
    localStorage.setItem(time, plan);
  });

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

});
