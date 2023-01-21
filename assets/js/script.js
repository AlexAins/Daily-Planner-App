// Dom Elements
var currentDayEl = $("#currentDay");
var containerEl = $("#containerEl");

// Moments.js to make Date at top of screen
function renderClock(){
    var today = moment();
    currentDayEl.text(today.format("dddd, D MMMM YYYY, h:mm a"));
}

window.setInterval(renderClock, 1000);

// Getting a time variable
let timeLive = moment().format("H");


// Making all rows
for (i = 0; i < 9; i++){

    // Create Row
    var hourRowEl = $("<div>");
    hourRowEl.addClass("row time-block");
    hourRowEl.attr("id", "row");
    hourRowEl.attr('data-row', i);
    containerEl.append(hourRowEl);

    // Adding hour colum to row
    var hourColEl = $("<div>");
    hourColEl.addClass("col hour");
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

    // Setting Hour text
    if(i < 3){
        hourColEl.text(i + 9 + "am");
    }
    else if(i == 3){
        hourColEl.text(i + 9 + "pm");
    }
    else{
        hourColEl.text(i - 3 + "pm");
    }

    timeColor();
}


// Setting attributes dependant on time
function timeColor(){
    if(timeLive - 9  > hourRowEl.attr("data-row")){
        textColEl.addClass("past");
    }
    else if(timeLive - 9 == hourRowEl.attr("data-row")){
        textColEl.addClass("present");
    }
    else if(timeLive - 9 < hourRowEl.attr("data-row")){
        textColEl.addClass("future");
    }
}

