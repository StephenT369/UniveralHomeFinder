require("dotenv").config();
var axios = require("axios");
axios.default.defaults.headers.common["apikey"] = process.env.apikey;
axios.default.defaults.headers.common["Accept"] = process.env.Accept;
var Zillow = require("node-zillow");
var zApi = new Zillow(process.env.ZWSID);

var postalCode = 75218;
var pageSize = 21;
var minTaxAmt = 2000;
var maxTaxAmt = 3000;
var minMktTtlValue = 100000;
var maxMktTtlValue = 200000;
var maxBeds = 3;
var maxBathsTotal = 3;

attomUrl =
  "https://api.gateway.attomdata.com/propertyapi/v1.0.0/assessment/detail?" +
  "postalcode=" +
  postalCode +
  "&pagesize=" +
  pageSize +
  "&propertytype=SFR" +
  "&minTaxAmt=" +
  minTaxAmt +
  "&maxTaxAmt=" +
  maxTaxAmt +
  "&minMktTtlValue=" +
  minMktTtlValue +
  "&maxMktTtlValue=" +
  maxMktTtlValue +
  "&maxBeds=" +
  maxBeds +
  "&maxBathsTotal=" +
  maxBathsTotal;

axios.default
  .get(attomUrl)
  .then(function(response) {
    var data = response.data.property;
    var address = [];
    var locality = [];
    var countrySubd = [];
    var postal1 = [];
    var taxamt = [];

    for (let i = 0; i < data.length; i++) {
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
  .then(async address => {
    for (let i = 0; i < address.length; i++) {
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
      var estVal = results.response.results.result[0].zestimate[0].amount[0]._;
      console.log(estVal)
      
      return zpid, estVal;
    })
    .then(function(zpid) {
      zApi
        .get("GetUpdatedPropertyDetails", { zpid: zpid })
        .then(function(results) {
          var images = results.response.images.image[0].url;
          console.log("\n\n----PROPERTY----");
          //console.log(address);
          console.log('****Address****')
          console.log(results.response.address.street[0]);
          console.log(results.response.address.city[0]);
          console.log(results.response.address.state[0]);
          console.log(results.response.address.zipcode[0]+'\n\n');
          console.log('****Details****')
          console.log('year Built: '+results.response.editedFacts.yearBuilt[0] );
          console.log('living sqft: '+results.response.editedFacts.finishedSqFt[0] );
          console.log('lot sqft: '+results.response.editedFacts.lotSizeSqFt[0] );
          console.log('bedrooms: '+results.response.editedFacts.bedrooms[0]);
          console.log('bathrooms: '+results.response.editedFacts.bathrooms[0]);
          console.log('description:\n' + results.response.homeDescription);
          console.log(images);
          //loop through image array if we need it.
          /*for (let i = 0; i < images[i].length; i++) {
            console.log(images[i]);
          };*/
          console.log(results.response.links);
          console.log("----PROPERTY----");
          /*console.log("****ZILLOW WHOLE RESPONSE****");
          console.log(results)*/
          return results.response;
        });
    });
}
