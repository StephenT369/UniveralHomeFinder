require("dotenv").config();
//var db = require("../models");
//var passport = require("../config/passport");

var Zillow = require("node-zillow");
var zwsid = "X1-ZWz1hghtx31b0r_47pen";
var zApi = new Zillow(zwsid);

var parms = {
  //zpid: 48749425,
  //address: "2114 Bigelow Ave",
  address: "4232 MCKINNEY AVE APT 104",
  citystatezip: "75205"
};

zApi
  .get("GetDeepSearchResults", parms)
  .then(function(results) {
    var zpid = results.response.results.result[0].zpid;
    return zpid;
  })
  .then(function(zpid) {
    zApi
      .get("GetUpdatedPropertyDetails", { zpid: zpid })
      .then(function(results) {
        console.log(results.response.links);
        console.log(results.response.images.image);
      });
  });
