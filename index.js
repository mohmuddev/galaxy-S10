//curretn time
var today = new Date();
var time =
  today.getHours() + ":" + today.getMinutes();
document.getElementById("time").innerHTML = time;

// curent date
const months = [
  "JAN",
  "FEB",
  "MAR",
  "APR",
  "MAY",
  "JUN",
  "JUL",
  "AUG",
  "SEP",
  "OCT",
  "NOV",
  "DEC",
];
let current_datetime = new Date();
let formatted_date =
  current_datetime.getDate() +
  "-" +
  months[current_datetime.getMonth()] +
  "-" +
  current_datetime.getFullYear();

document.getElementById("date").innerHTML = formatted_date;
