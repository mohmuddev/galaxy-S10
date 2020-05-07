//Lock screen current time
var today = new Date();
var time = today.getHours() + ":" + today.getMinutes();
document.getElementById("time").innerHTML = time;

//Home screen current time
var today = new Date();
var time = today.getHours() + ":" + today.getMinutes();
document.getElementById("home-time").innerHTML = time;

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

//Handling DOM events

// Selection of HTML Elememtns
const LockScreen = document.querySelector(".lock-screen");
const HomeScreen = document.querySelector(".home");

//Touch move event Listner
LockScreen.addEventListener("click", function () {
  LockScreen.classList.add("hide-lockScreen");
  HomeScreen.classList.add("show-homeScreen");
});
