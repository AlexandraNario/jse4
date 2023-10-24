
// global-scoped function
function updateGlobalTime() {
  // function-scoped variables
  let utcTime = document.getElementById("utc-time");
  // Calculate UTC time
  const utcHours = new Date().getUTCHours();
  const utcMinutes = new Date().getUTCMinutes();
  const utcSeconds = new Date().getUTCSeconds();

  // checks if UTC hours is greater than 12 or less than 12
  // if utcHours > 12 = true, use 'PM'
  // else, use 'AM'
  const utcAmPm = utcHours >= 12 ? 'PM' : 'AM';

  // modulo will determine what hours in a day are remaining in a 24-hour format, then use those remaining hours to represent the current hour
  // If utcHours is between 0 and 11 (inclusive), it's AM.
  // If utcHours is between 12 and 23 (inclusive), it's PM.
  // the appropriate algorithm to convert 24-hour time to 12-hour time is
  // utcHours % 12
  // for example, if utcHours is 8, it's 8AM
  // however, if utcHours is 15, it's 6PM
  // below, we are checking if there is a remainder, and there isn't,
  // meaning utc % 12 = 0, it is technically midnight, so we use 12.
  const utc12Hour = utcHours % 12 || 12;

  // Format the time strings
  const utcTimeStr = `${utc12Hour}:${utcMinutes}:${utcSeconds} ${utcAmPm}`;

  // Update the HTML
  utcTime.textContent = `UTC Time: ${utcTimeStr}`;
}

function startGlobalTimer() {
    // Update the time every second
    setInterval(updateGlobalTime, 1000);
}

let button = document.getElementById("globalTimerButton");

button.addEventListener('click', startGlobalTimer);
break;


function updatelocalTime() {
  // function-scoped variables
  let pdtTime = document.getElementById("utc-time");
  // Calculate UTC time
  const pdtHours = new Date().getUTCHours();
  const pdtMinutes = new Date().getUTCMinutes();
  const pdtSeconds = new Date().getUTCSeconds();

  const pdtAmPm = pdtHours >= 12 ? 'PM' : 'AM';
  const pdt12Hour = pdtHours % 12 || 12;

  // Format the time strings
  const pdtTimeStr = `${pdt12Hour}:${pdtMinutes}:${pdtSeconds} ${pdtAmPm}`;
   pdtTime.textContent = `PDT Time: ${pdtTimeStr}`;
  }

function startlocalTimer() {
  // Update the time every second
  setInterval(updatelocalTime, 1000);
}

let button = document.getElementById("localTimerButton");

button.addEventListener('click', startlocalTimer);

//when i delete the globaltime js code the local timer shows but when i delete the local time js code the global timer shows.
//need to look up how to seperate the data. no error shows but something is cancelling each other out
