// Dom Elements
var currentDayEl = $("#currentDay");
var containerEl = $("#containerEl");

// Moments.js to make Date at top of screen
var today = moment();
currentDayEl.text(today.format("dddd, D MMMM YYYY"));

// Making all rows
for (i = 0; i < 9; i++){

    // Create Row
    var hourRowEl = $("<div>");
    hourRowEl.addClass("row time-block");
    hourRowEl.attr("data-time", [i]);
    containerEl.append(hourRowEl);

    // Adding hour colum to row
    var hourColEl = $("<div>");
    hourColEl.addClass("col hour");
    hourColEl.text([i]);
    hourRowEl.append(hourColEl);

    // Adding text colum to row
    var textColEl = $("<textarea>");
    textColEl.addClass("col-10 description");
    hourRowEl.append(textColEl);

    // Adding Submit Button to row
    var submitColEl = $("<button>");
    submitColEl.addClass("col saveBtn");
    submitColEl.text("Submit");
    hourRowEl.append(submitColEl);
}




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
