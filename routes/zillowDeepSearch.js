require("dotenv").config();
//var db = require("../models");
//var passport = require("../config/passport");

var Zillow = require("node-zillow");
var zwsid = 'X1-ZWz1hghtx31b0r_47pen';
var zApi = new Zillow(zwsid);

var parms = {
    //zpid: 48749425,
    address: '2114 Bigelow Ave',
    citystatezip: '98109'
};

zApi.get('GetDeepSearchResults', parms)
.then(function(results){
   //console.log(results[0].response.results + '\n\n');
   //console.log(results);

   console.log('---GetDeepSearchResults---')
   console.log(results.response.results.result);
   console.log(results.response.results.result[0].links);
   console.log(results.response.results.result[0].address);
   console.log(results.response.results.result[0].lastSoldPrice);
   console.log(results.response.results.result[0].zestimate);
   console.log(results.response.results.result[0].localRealEstate);
   console.log('---GetDeepSearchResults---')
   //console.log(results.response.results);
   
    //return results;
});
/*
zApi.get('GetUpdatedPropertyDetail', parms)
.then(function(results){
   //console.log(results[0].response.results + '\n\n');
   //console.log(results);

   console.log('---GetUpdatedPropertyDetail---')
   console.log(results.response.results.result);
   console.log(results.response.results.result[0].links);
   console.log(results.response.results.result[0].address);
   console.log(results.response.results.result[0].lastSoldPrice);
   console.log(results.response.results.result[0].zestimate);
   console.log(results.response.results.result[0].localRealEstate);
   console.log('---GetUpdatedPropertyDetail---')
   //console.log(results.response.results);
   
    //return results;
});*/