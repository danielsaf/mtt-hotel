/**
 * Created by danielsafinski on 02.06.2016.
 */

var frisby = require('frisby'),
    support = require('./../../config/supportCollection.js'),
    url = support.url,
    hellpers = support.hellpers;

// ******************************************************************************* Positive test ********************************************

frisby.create('Book room for ' + hellpers.currentDate)
    .post(url.bookRoom,
        {
            "numOfDays":5, 
            "checkInDate": hellpers.currentDate
        }, 
        { 
            json: true 
        })
    .expectStatus(200)
    .expectHeaderContains('content-type', 'application/json')
    .inspectJSON()
    .expectJSON({
        checkInDate: hellpers.currentDate, 
        checkOutDate: hellpers.addDate(5, 'days'), 
        totalPrice: hellpers.totalPrice(hellpers.addDate(5, 'days'))
    })
    .expectJSONTypes({
        checkInDate: String,
        checkOutDate: String,
        totalPrice: Number
        }
    )
    .toss();

// frisby.create('Book room for ' + hellpers.addDate(3, 'days'))
//     .post(url.bookRoom,
//         {
//             "numOfDays":2,
//             "checkInDate": hellpers.addDate(3, 'days')
//         },
//         {
//             json: true
//         })
//     .expectStatus(200)
//     .expectHeaderContains('content-type', 'application/json')
//     .inspectJSON()
//     .expectJSON({
//         checkInDate: hellpers.addDate(3, 'days'),
//         // checkOutDate: hellpers.addDate(2, 'days'),
//         totalPrice: hellpers.totalPrice(hellpers.addDate(2, 'days'))
//     })
//     .expectJSONTypes({
//             checkInDate: String,
//             checkOutDate: String,
//             totalPrice: Number
//         }
//     )
//     .toss();