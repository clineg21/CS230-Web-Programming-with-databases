"use strict";
var $ = function(id) { 
    return document.getElementById(id); 
};

var displayCurrentTime = function() {
    //create a Date object for the time
    var time = new Date();
    
    var hours = time.getHours();
    var min = time.getMinutes();
    var sec = time.getSeconds();

    min = padSingleDigit(min);
    sec = padSingleDigit(sec);

    //if hours is greater than 12, subtract 12 from hours and set 
    //ampm to the value of PM
    if(hours > 12) {
        hours = hours - 12;
        $("ampm").firstChild.nodeValue = "PM";
    }
    else {
        $("ampm").firstChild.nodeValue = "AM";
    }

    //display the hours, minutes and seconds
    document.getElementById("hours").firstChild.nodeValue = hours;
    document.getElementById("minutes").firstChild.nodeValue = min;
    document.getElementById("seconds").firstChild.nodeValue = sec;
};

var padSingleDigit = function(num) {
    if (num < 10) {	
        return "0" + num; 
    } 
    else { 
        return num; 
    }
};

window.onload = function() {
    // set initial clock display and then set interval timer to display
    // new time every second. Don't store timer object because it 
    // won't be needed - clock will just run.

    displayCurrentTime();
    var currentTime = setInterval(displayCurrentTime, 1000);
};