"use strict";
var $ = function(id) { return document.getElementById(id); };


var clearTextBoxes = function() {
    $("degrees_entered").value = "";
    $("degrees_computed").value = "";
    $("degrees_entered").focus();
};

var toFahrenheit = function() {
   $("degree_label_1").firstChild.nodeValue = "Enter C degrees: ";
   $("degree_label_2").firstChild.nodeValue = "Degrees Fahrenheit: ";
   clearTextBoxes();
};

var toCelsius = function() {
    $("degree_label_1").firstChild.nodeValue = "Enter F degrees: ";
    $("degree_label_2").firstChild.nodeValue = "Degrees Celsius: ";
    clearTextBoxes();
};

var convertTemp = function() {
    var degrees = parseFloat($("degrees_entered").value);
    if($("to_celsius").checked) {
        var c = ((degrees - 32)*(5/9));
        $("degrees_computed").value = c.toFixed(0);
    }
    else if($("to_fahrenheit").checked) {
        var f = ((degrees * (9/5)) + 32);
        $("degrees_computed").value = f.toFixed(0);
    }
};

window.onload = function() {
    $("convert").onclick = convertTemp;
    $("to_celsius").onclick = toCelsius;
    $("to_fahrenheit").onclick = toFahrenheit;
	$("degrees_entered").focus();
};