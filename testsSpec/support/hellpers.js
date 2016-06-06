'use strict'
var moment = require('moment');
var hellpers = (function() {
    
    function currentDate() {
         return moment().format('YYYY-MM-DD');
    }

    function addDate(number, String) {
        return moment().add(number, String).format('YYYY-MM-DD');
    }

    function subtractDate(number, String ) {
        return moment().subtract(number, String).format('YYYY-MM-DD');
    }


    function actualPrice() {
        return 100 + ((moment().format('d')+1)%7) *10;
    }

    function totalPrice(outDate) {
        var now = new Date(outDate);
        var daysOfYear = [];
        for (var d = new Date(); d <= now; d.setDate(d.getDate() + 1)) {
            daysOfYear.push(100 + ((new Date(d).getDay()+2)%7) *10);
            console.log(daysOfYear)
        }
       return daysOfYear.reduce(function(prev, cur) {
            return prev + cur;
        });
    
    }
    

    return {
        currentDate:currentDate(),
        addDate: addDate,
        subtractDate: subtractDate,
        actualPrice: actualPrice,
        totalPrice: totalPrice
    };

}());
module.exports = hellpers;