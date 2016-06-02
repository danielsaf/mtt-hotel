/**
 * Created by danielsafinski on 31.05.2016.
 */
'use strict'
var frisby = require('frisby');
var json = require('./../../config/supportCollection.js');


frisby.create('Get Brightbit Twitter feed')
    .get(json.url.getCheckAvailability + '/2013-20-20')
    .expectStatus(200)
    .expectHeaderContains('content-type', 'application/json')
    .inspectJSON()
    //    
    // .expectJSON({
    //     date: '2013-04-20',
    //     rooms_available: 10,
    //     price: 100
    //     }
    // )
    // .inspectRequest()
    // .expectJSONTypes({
    //     date: String,
    //     rooms_available: Number,
    //     price: Number
    //     }
    // )
    .toss();