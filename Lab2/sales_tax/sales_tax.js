var $ = function (id) {
    return document.getElementById(id); 
};

// Calculate the sales tax
var calculateTax = function(subtotal, taxRate) {
    var salesTax = ((subtotal * taxRate)/100);
    salesTax = salesTax.toFixed(2);
    return salesTax;
};

//calculate the sales total
var calculateTotal = function(subtotal, salesTax) {
  var totalSales = subtotal + salesTax;
  totalSales = totalSales.toFixed(2);
  return totalSales;  
};

//Calculate the Entries
var processEntries = function() {
    var subtotal = parseFloat($("subtotal").value);
    var taxRate = parseFloat($("tax_rate").value);
    if((isNaN(subtotal)) || (subtotal <= 0 || subtotal >= 10000)) {
        alert("Subtotal must be a number > 0 and < 10000");   
    }
    else if((isNaN(taxRate)) || (taxRate <= 0 || taxRate >= 12)) {
        alert("Tax Rate must be a number > 0 and < 12");
    }
    else {
        $("sales_tax").value = calculateTax(subtotal, taxRate);
        var salesTax = parseFloat($("sales_tax").value);
        $("total").value = calculateTotal(subtotal, salesTax);
    }
};

var clearEntries = function() {
    $("subtotal").value = "";
    $("tax_rate").value = "";
    $("sales_tax").value = "";
    $("total").value = "";
    $("subtotal").focus();
}

window.onload = function(){
    $("calculate").onclick = processEntries;
    $("clear").onclick = clearEntries;
    $("subtotal").focus();
};



