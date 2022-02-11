// // Targeting html elements by id and class
const locationInputEl = document.getElementById("locationInput");
const button = document.getElementById("submit");
const eventContainer = document.querySelector(".event-container");
const weatherContainer = document.querySelector(".weather-container");
const historyArray = document.querySelector("#searchHistoryList > ul");
let video = document.querySelector("video");
// Storing Api Keys in const
const ticketMasterAPIKey = "vALoXTDCwMtpJAXLFXIA2X2UcOi3G0Pb";
const openWeatherAPIKey = "86cf18e05a581bc89bba25b5d33cbc10";
// Retreiving then storing live date from moment js to specify the events displayed to be for on the day. Using the variable 'Today' as a paremeter in teh feth call to get events data.
let Today = moment().format("YYYY-MM-DD");
// Function to get events from ticket masters API, and then dynamically displaying data using cards. Function serves as a search handler.
function searchHandler(e) {
  // Once the search button is used, the video will be replaced with event and weather content
  video.remove();
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
      data["_embedded"].events.forEach((event) => {
        eventContainer.innerHTML += ` <div class="card is-outlined mt-10">
    
    <div class="tile is-parent">
    <div class="tile is-child box ">  
    <p class="title">Event Name</p>
      <p class="title">${event.name}</p>
      <img src="https://app.ticketmaster.com/discovery/v2/${event.images[0].url}.png">
    </div>    
    <div class="tile is-ancestor">
<div class="tile is-parent">
<article class="tile is-child box">
<p class="title">Event Status</p>
  <p class="title">${event.dates.status.code}</p>
  <p class="subtitle"></p>
</article>
</div>    
<div class="tile is-parent">
<article class="tile is-child box">
<p class="title">${event.dates.start.localDate}</p>
<p class="title"> Price: £${event.priceRanges[0].max}</p>

<p class="subtitle"></p>
</article>
</div>
    </div>`;
      });
    });
  // Fetching weather data
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${locationInputEl.value},gb&appid=${openWeatherAPIKey}&units=metric`
  )
    .then((res) => res.json())
    .then((data) => {
      // console.log(data)

// Search button event listener to run function search handler
button.addEventListener("click", searchHandler);