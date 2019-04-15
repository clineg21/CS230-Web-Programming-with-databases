var region1 = [1540, 1130, 1580, 1105];
var region2 = [2010, 1168, 2305, 4102];
var region3 = [2450, 1847, 2710, 2391];
var region4 = [1845, 1491, 1284, 1575];
var region5 = [2120, 1767, 1599, 3888];

// calculate quarter sales
"use strict";
function quarterSales(i)
{
    var quarterSales = 0;
    quarterSales += region1[i] + region2[i] + region3[i] + region4[i] + region5[i];
    return quarterSales;
}

//Calculate sales per region
function regionSales(regionArray)
{
    var regionSales = 0;

    for(var i = 0; i < regionArray.length; i++)
    {
        regionSales += regionArray[i];
    }

    return regionSales;
}