$(document).ready(function() {
    var total = 0.0;

    $("#menu img").each(function() {
        var oldUrl = $(this).attr("src");
        var newURL = $(this).attr("id");

        //preload images
        var rolloverImage = new Image();
        rolloverImage.src = newURL;

        //set up event handler for the hover effect
        $(this).hover(
            function() {
                $(this).attr("src", newURL);
            },
            function() {
                $(this).attr("src", oldUrl);
            }
        );

        //set up a click function
        $(this).click(function() {
            if($(this).attr("id") == "images/espresso_info.jpg"){
                $("#order").append('<option value="menuOption">$1.95 - Espresso</option>');
                total += 1.95;
            }
            if($(this).attr("id") == "images/latte_info.jpg"){
                $("#order").append('<option value="menuOption">$2.95 - Latte</option>');
                total += 2.95;
            }
            if($(this).attr("id") == "images/cappuccino_info.jpg"){
                $("#order").append('<option value="menuOption">$3.45 - Cappuccino</option>');
                total += 3.45;
            }
            if($(this).attr("id") == "images/coffee_info.jpg"){
                $("#order").append('<option value="menuOption">$1.75 - Coffee</option>');
                total += 1.75;
            }
            if($(this).attr("id") == "images/biscotti_info.jpg"){
                $("#order").append('<option value="menuOption">$1.95 - Biscotti</option>');
                total += 1.95;
            }
            if($(this).attr("id") == "images/scone_info.jpg"){
                $("#order").append('<option value="menuOption">$2.95 - Scone</option>');
                total += 2.95;
            }

            //display the total each time a new item is added to the order
            $("#total").text("Total: $" + total.toFixed(2));
        });

    });

    //go to checkout.html when the button with the place_order id is clicked
    $("#place_order").click(function() {
        $("#order_form").submit(); 
    });

    //clear the order box
    $("#clear_order").click(function() {
        total = 0.0;
        $("#order").text("");
        $("#total").html("&nbsp;");
    });
});