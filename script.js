
$(function () {
    $("#currentDay").text(dayjs().format("DD MMMM YYYY, h:mm:ss a"))
  
  let currentHour = parseInt(dayjs().format("HH"));

  $(".saveBtn").on("click", function () {
    var time = $(this).closest('div').attr('id');
    var text = $(this).siblings(".description").val();

    localStorage.setItem(time, text);

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




