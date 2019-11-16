require("dotenv").config();
var axios = require("axios");
axios.default.defaults.headers.common["apikey"] = process.env.apikey;
axios.default.defaults.headers.common["Accept"] = process.env.Accept;
var Zillow = require("node-zillow");
var zApi = new Zillow(process.env.ZWSID);

var postalCode = 75218;
var pageSize = 2;
attomUrl =
  "https://api.gateway.attomdata.com/propertyapi/v1.0.0/property/address?" +
  "postalcode=" +
  postalCode +
  "&pagesize=" +
  pageSize;

axios.default
  .get(attomUrl)
  .then(function(response) {
    var data = response.data.property;
    var address = [];
    for (i = 0; i < data.length; i++) {
      //console.log(data[i])
      address.push(data[i].address.line1);
    }
    return address;
  })
  .catch(function(error) {
    if (error.response) {
      console.log("RESPONSE ERROR: ", error.message);
    } else if (error.request) {
      console.log(error.request);
    } else {
      console.log("REQUEST ERROR: ", error.message);
    }
    console.log(error.config);
  })
  .then(async (address) => {
    for (i = 0; i < address.length; i++) {
      
      var parms = {
        address: address[i],
        citystatezip: postalCode
      };
      
      const zillowData = await getZillowData(parms, address[i]);
    }
  });

  function getZillowData(parms, address) {
    return zApi
        .get("GetDeepSearchResults", parms, address)
        .then(function(results) {
          var zpid = results.response.results.result[0].zpid;

          return zpid;
        })
        .then(function(zpid) {
          
          zApi
            .get("GetUpdatedPropertyDetails", { zpid: zpid })
            .then(function(results) {
              console.log("\n\n----PROPERTY----");
              //console.log(addressDisp.address)
              console.log(address);
              console.log(results.response);
              /*
              console.log(zpid);
              console.log(results.response.links);
              console.log(results.response.images.image);*/
              console.log("----PROPERTY----");
              return results.response;
            });
        });
  }
