/**
 * Created by danielsafinski on 31.05.2016.
 */
'use strict'
var frisby = require('frisby'),
    support = require('./../../config/supportCollection.js'),
    json = support.url,
    hellpers = support.hellpers;

// ******************************************************************************* Positive test ********************************************

frisby.create('CheckAvailability for ' + hellpers.currentDate)
    .get(json.getCheckAvailability + hellpers.currentDate)
    .expectStatus(200)
    .expectHeaderContains('content-type', 'application/json')
    .inspectJSON()
    .expectJSON({
        date: hellpers.currentDate,
        rooms_available: 10,
        price: hellpers.actualPrice
        }
    )
    .expectJSONTypes({
        date: String,
        rooms_available: Number,
        price: Number
        }
    )
    .toss();


frisby.create('CheckAvailability for one day ahead' + hellpers.addDate(1, 'days'))
    .get(json.getCheckAvailability + hellpers.addDate(1, 'days'))
    .expectStatus(200)
    .expectHeaderContains('content-type', 'application/json')
    .inspectJSON()
    .expectJSON({
            date: hellpers.addDate(1, 'days'),
            rooms_available: 10,
            price: hellpers.actualPrice
        }
    )
    .expectJSONTypes({
            date: String,
            rooms_available: Number,
            price: Number
        }
    )
    .toss();

frisby.create('CheckAvailability for 60 days ahead' + hellpers.addDate(60, 'days'))
    .get(json.getCheckAvailability + hellpers.addDate(60, 'days'))
    .expectStatus(200)
    .expectHeaderContains('content-type', 'application/json')
    .inspectJSON()
    .expectJSON({
            date: hellpers.addDate(60, 'days'),
            rooms_available: 10,
            price: hellpers.actualPrice
        }
    )
    .expectJSONTypes({
            date: String,
            rooms_available: Number,
            price: Number
        }
    )
    .toss();

frisby.create('CheckAvailability for 360 days ahead' + hellpers.addDate(360, 'days'))
    .get(json.getCheckAvailability + hellpers.addDate(360, 'days'))
    .expectStatus(200)
    .expectHeaderContains('content-type', 'application/json')
    .inspectJSON()
    .expectJSON({
            date: hellpers.addDate(360, 'days'),
            rooms_available: 10,
            price: hellpers.actualPrice
        }
    )
    .expectJSONTypes({
            date: String,
            rooms_available: Number,
            price: Number
        }
    )
    .toss();

// ********************************************* Negative test **************************************************************************

frisby.create('CheckAvailability for 1 day before current date' + hellpers.subtractDate(1, 'days'))
    .get(json.getCheckAvailability + hellpers.subtractDate(1, 'days'))
    .expectStatus(400)
    .after(function (err,res,body) {
        var token = body;
        expect(token).toMatch("Invalid or missing date '" + hellpers.subtractDate(1, 'days') + "'. Current date: " + hellpers.currentDate);
        frisby.globalSetup({

            request: {
                headers: { 'User-Token': token }
            }
        })

    })
    .toss();

frisby.create('CheckAvailability for 10 days before current date' + hellpers.subtractDate(10, 'days'))
    .get(json.getCheckAvailability + hellpers.subtractDate(10, 'days'))
    .expectStatus(400)
    .after(function (err,res,body) {
        var token = body;
        expect(token).toMatch("Invalid or missing date '" + hellpers.subtractDate(10, 'days') + "'. Date cannot be past. Current date: " + hellpers.currentDate);
        frisby.globalSetup({

            request: {
                headers: { 'User-Token': token }
            }
        })

    })
    .toss();

frisby.create('CheckAvailability with incorrect Year: 4776467-02-03')
    .get(json.getCheckAvailability + '4776467-02-03')
    .expectStatus(400)
    .after(function (err,res,body) {
        var token = body;
        expect(token).toMatch("Invalid or missing date '" + '4776467-02-03' + "'. Valid date format is: yyyy-mm-dd, e.g. 2013-04-20.");
        frisby.globalSetup({

            request: {
                headers: { 'User-Token': token }
            }
        })

    })
    .toss();

frisby.create('CheckAvailability with incorrect Year: 0000-02-03')
    .get(json.getCheckAvailability + '0000-02-03')
    .expectStatus(400)
    .after(function (err,res,body) {
        var token = body;
        expect(token).toMatch("Invalid or missing date '" + '00000-02-03' + "'. Valid date format is: yyyy-mm-dd, e.g. 2013-04-20.");
        frisby.globalSetup({

            request: {
                headers: { 'User-Token': token }
            }
        })

    })
    .toss();

frisby.create('CheckAvailability with incorrect month: 2017-48-03')
    .get(json.getCheckAvailability + '2017-48-03')
    .expectStatus(400)
    .after(function (err,res,body) {
        var token = body;
        expect(token).toMatch("Invalid or missing date '" + '2017-48-03' + "'. Valid date format is: yyyy-mm-dd, e.g. 2013-04-20.");
        frisby.globalSetup({

            request: {
                headers: { 'User-Token': token }
            }
        })

    })
    .toss();

frisby.create('CheckAvailability with incorrect month: 2017-00-03')
    .get(json.getCheckAvailability + '2017-00-03')
    .expectStatus(400)
    .after(function (err,res,body) {
        var token = body;
        expect(token).toMatch("Invalid or missing date '" + '2017-00-03' + "'. Valid date format is: yyyy-mm-dd, e.g. 2013-04-20.");
        frisby.globalSetup({

            request: {
                headers: { 'User-Token': token }
            }
        })

    })
    .toss();

frisby.create('CheckAvailability with incorrect day: 2017-05-67')
    .get(json.getCheckAvailability + '2017-05-67')
    .expectStatus(400)
    .after(function (err,res,body) {
        var token = body;
        expect(token).toMatch("Invalid or missing date '" + '2017-05-67' + "'. Valid date format is: yyyy-mm-dd, e.g. 2013-04-20.");
        frisby.globalSetup({

            request: {
                headers: { 'User-Token': token }
            }
        })

    })
    .toss();

frisby.create('CheckAvailability with incorrect day: 2017-05-00')
    .get(json.getCheckAvailability + '2017-05-00')
    .expectStatus(400)
    .after(function (err,res,body) {
        var token = body;
        expect(token).toMatch("Invalid or missing date '" + '2017-05-00' + "'. Valid date format is: yyyy-mm-dd, e.g. 2013-04-20.");
        frisby.globalSetup({

            request: {
                headers: { 'User-Token': token }
            }
        })

    })
    .toss();

frisby.create('CheckAvailability with some symbol (-) on date: ' + '-' + hellpers.currentDate )
    .get(json.getCheckAvailability + '-' + hellpers.currentDate)
    .expectStatus(400)
    .after(function (err,res,body) {
        var token = body;
        expect(token).toMatch("Invalid or missing date '" + '-' + hellpers.currentDate + "'. Valid date format is: yyyy-mm-dd, e.g. 2013-04-20.");
        frisby.globalSetup({

            request: {
                headers: { 'User-Token': token }
            }
        })

    })
    .toss();

frisby.create('CheckAvailability with some symbol (=) on date: ' + '=' + hellpers.currentDate)
    .get(json.getCheckAvailability + '=' + hellpers.currentDate)
    .expectStatus(400)
    .after(function (err,res,body) {
        var token = body;
        expect(token).toMatch("Invalid or missing date '" + '=' + hellpers.currentDate + "'. Valid date format is: yyyy-mm-dd, e.g. 2013-04-20.");
        frisby.globalSetup({

            request: {
                headers: { 'User-Token': token }
            }
        })

    })
    .toss();

        