// Dom Elements
var currentDayEl = $("#currentDay");

// Moments.js to make Date at top of screen
var today = moment();
currentDayEl.text(today.format("dddd, D MMMM YYYY"));

// Getting a time variable
let timeLive = moment().format("H");


// Setting attributes dependant on time
function timeColor(){
    if(timeLive > $("#9am").text()){
        $("#9amText").addClass("past");
    }
    else if(timeLive == $("#9am").text()){
        $("#9amText").addClass("present");
    }
    else if(timeLive < $("#9am").text()){
        $("#9amText").addClass("future");
    }
}

timeColor();
console.log(timeLive);
console.log($("#9am").text());