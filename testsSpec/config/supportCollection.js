var supportCollection = (function() {

    var url = require('../support/serviceUrl.json'),
        hellpers = require('../support/hellpers.js');
    
    return {
        url: url,
        hellpers: hellpers
    };

}());
module.exports = supportCollection;
