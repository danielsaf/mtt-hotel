'use strict'
var moment = require('moment');
var hellpers = (function() {
    
    function currentDate() {
         return moment().format('YYYY-MM-DD');
    }

    function addDate(number, String ) {
        return moment().add(number, String).format('YYYY-MM-DD');
    }

    function subtractDate(number, String ) {
        return moment().subtract(number, String).format('YYYY-MM-DD');
    }


    function actualPrice() {
        return 100 + ((moment().format('d')+1)%7) *10;
    }


    return {
        currentDate:currentDate(),
        addDate: addDate,
        subtractDate: subtractDate,
        actualPrice: actualPrice
    };

}());
module.exports = hellpers;


