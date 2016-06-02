
var hellper = (function() {
    function getCurrentDate() {
        var date = new Date(),
            year = date.getFullYear(),
            month = date.getUTCMonth() + 1;
                if(month <= 9)
                    month = '0'+ month;

        var day = new date.getUTCDate();
                if(day <= 9)
                    day = '0'+ day;

        return year + "-" + month + "-" + day;
    }
    
    return {
        getCurrentDate:getCurrentDate()
    };

}());
module.exports = hellper;


