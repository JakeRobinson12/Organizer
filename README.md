# OrganizerHere are my suggested steps to achieve the results you want to see, some of them you have I am just adding them here for clarity:
First, display the current date and time in the header using Day.js.
$("#currentDay").text(dayjs().format("DD MMMM YYYY, h:mm:ss a"));
Get the current hour using Day.js and store it in a variable.
let currentHour = parseInt(dayjs().format("HH"));
Select all elements with the time-block class and iterate through them using the each function.
$(".time-block").each(function () {
  // ...
});
Inside the each function:
For each time block element, extract the hour from its ID by splitting the string on "hour" and getting the second part, which is the number. Convert the extracted number into an integer.
let blockHour = parseInt($(this).attr("id").split("hour")[1]);
Compare the extracted hour (blockHour) to the current hour (currentHour) and add the appropriate class to the description element inside the time block.
• If blockHour is equal to currentHour, add the "present" class.
• If blockHour is less than currentHour, add the "past" class.
• If blockHour is greater than currentHour, add the "future" class.
if (blockHour === currentHour) {
  $(this).children(".description").addClass("present");
} else if (blockHour < currentHour) {
  $(this).children(".description").addClass("past");
} else {
  $(this).children(".description").addClass("future");
}
Add a click event listener to the save button inside each time block.
$(".saveBtn").on("click", function () {
  // ...
});
Inside the eventListener:
When the save button is clicked, get the ID of the time block containing the button and the value of the description field. Save the value in localStorage with the ID as the key.
var time = $(this).closest('div').attr('id');
var plan = $(this).siblings(".description").val();
localStorage.setItem(time, plan);
Load any user input that was saved in localStorage and set the values of the corresponding textarea elements.
$("#hour8 .description").val(localStorage.getItem("hour8"));
// ... repeat for other hour IDs
Ideally: by following these steps, you will create a dynamic, color-coded time block layout that saves user input in localStorage and loads it when the page is refreshed. The time blocks will be color-coded based on whether they are in the past, present, or future.
6:25
Take a second to look these over and make sure you have an understanding of what to do before we resolve the question please :pray:
6:28
Your code should be structured as follows:
$(function () {
  $("#currentDay").text(dayjs().format("DD MMMM YYYY, h:mm:ss a"));

  // Get the current hour

  // Iterate through all the time blocks

    // Compare the extracted hour to the current hour and add the appropriate class
 
    // Save and set


  // ... Rest of your code to load items from localStorage ...