// Dom Elements
var currentDayEl = $("#currentDay");
var containerEl = $("#containerEl");

// Moments.js to make Date at top of screen that update
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
    hourRowEl.attr("id", "row"+i);
    hourRowEl.attr('data-row', i);
    containerEl.append(hourRowEl);

    // Adding hour colum to row
    var hourColEl = $("<div>");
    hourColEl.addClass("col hour");
    hourRowEl.append(hourColEl);

    // Adding text colum to row
    var textColEl = $("<textarea>");
    textColEl.addClass("col-10 description");
    textColEl.attr("id", "text"+i);
    hourRowEl.append(textColEl);

    // Adding Submit Button to row
    var submitColEl = $("<button>");
    submitColEl.addClass("col saveBtn");
    submitColEl.attr("id", "saveBtn"+i);
    submitColEl.attr('data-time', i);
    submitColEl.text("Submit");
    hourRowEl.append(submitColEl);

    // Setting Hour text (added 9 to get index to hours and removed 3 to make it to pm hours)
    if(i < 3){
        hourColEl.text(i + 9 + "am");
    }
    else if(i == 3){
        hourColEl.text(i + 9 + "pm");
    }
    else{
        hourColEl.text(i - 3 + "pm");
    }

    // Calling function to set background color based on time
    timeColor();

    // Loading event from local storage
    var eventText = localStorage.getItem(i);
    textColEl.text(eventText);
}


// Setting attributes dependant on time (Removed 9 to get timeLive to equate to index of rows)
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


// Saving event to local Storage

$('button').on('click', function(event){
    savedEventText = $(event.target).siblings("textarea").val();
    savedEventIndex = $(event.target).attr("data-time");

    localStorage.setItem(savedEventIndex, savedEventText);
})