/**
 * Created by danielsafinski on 02.06.2016.
 */

var frisby = require('frisby'),
    support = require('./../../config/supportCollection.js'),
    url = support.url,
    hellpers = support.hellpers;

// ******************************************************************************* Positive test ********************************************

frisby.create('CheckAvailability for ' + hellpers.currentDate)
    .post(url.bookRoom,
        {
            "numOfDays":2, 
            "checkInDate": hellpers.currentDate
        }, 
        { 
            json: true 
        })
    .expectStatus(200)
    .expectHeaderContains('content-type', 'application/json')
    .inspectJSON()
    .expectJSON({checkInDate: '2016-06-02', checkOutDate: '2016-06-04', totalPrice: 250})
    // .expectJSONTypes({
    //         date: String,
    //         rooms_available: Number,
    //         price: Number
    //     }
    // )
    .toss();