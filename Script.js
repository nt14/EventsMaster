// // Targeting html elements by id and class
const locationInputEl = document.getElementById("locationInput");
const button = document.getElementById("submit");
// Storing Api Keys in const
const ticketMasterAPIKey = "vALoXTDCwMtpJAXLFXIA2X2UcOi3G0Pb";
const openWeatherAPIKey = "86cf18e05a581bc89bba25b5d33cbc10";
// Function to get events from ticket masters API, and then dynamically displaying data using cards. Function serves as a search handler.
function searchHandler(e) {
  fetch(
    "https://app.ticketmaster.com/discovery/v2/events.json?apikey=" +
      ticketMasterAPIKey +
      "&sort=date,asc" +
      "&city=" +
      locationInputEl.value +
      "&countryCode=GB" +
      "&startedatetime=" +
      Today +
      "&size=2"
  )
    .then((res) => res.json())
    .then((data) => {
      console.log(data);

// Search button event listener to run function search handler
button.addEventListener("click", searchHandler);