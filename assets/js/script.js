// Dom Elements
var currentDayEl = $("#currentDay");

// Moments.js to make Date at top of screen
var today = moment();
currentDayEl.text(today.format("dddd, D MMMM YYYY"));