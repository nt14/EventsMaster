// // Targeting html elements by id and class
const locationInputEl = document.getElementById("locationInput");
const button = document.getElementById("submit");
// Storing Api Keys in const
const ticketMasterAPIKey = "vALoXTDCwMtpJAXLFXIA2X2UcOi3G0Pb";
const openWeatherAPIKey = "86cf18e05a581bc89bba25b5d33cbc10";
// Function to get events from ticket masters API, and then dynamically displaying data using cards. Function serves as a search handler.
function searchHandler(e) {

// Search button event listener to run function search handler
button.addEventListener("click", searchHandler);