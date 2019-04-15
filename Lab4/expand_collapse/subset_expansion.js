"use strict";
$(document).ready(function(evt) {
    //calling an onclick function for the a elements
    //in the jdom main element

    $("#jdom a").click(function() {
        //toggle 'hide' class for the previous element
        //above the 'a' element
        $(this).prev().toggleClass("hide");

        if($(this).prev().attr("class") == "hide") {
            $(this).text("Show more");
            $(this).prev().hide();
        }
        else {
            $(this).text("Show less");
            $(this).prev().show();
        }
        evt.preventDefault();
    });
    
});