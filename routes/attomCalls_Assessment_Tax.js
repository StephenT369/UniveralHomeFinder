require("dotenv").config();
var axios = require("axios");
axios.default.defaults.headers.common["apikey"] = process.env.apikey;
axios.default.defaults.headers.common["Accept"] = process.env.Accept;

var postalCode = 75205;
var minTax = 1000;
var maxTax = 3000;
var pageSize = 12;
attomUrl = 
"https://api.gateway.attomdata.com/propertyapi/v1.0.0/assessment/snapshot?"+
"minTaxAmt="+ minTax +
"&maxTaxAmt="+ maxTax +
"&postalcode="+ postalCode;

axios.default.get(attomUrl).then(
    function(response){
        var data = response.data.property;

        for(i=0; i < data.length; i++){
            /*console.log('----DATA----');
            console.log(data[i]);
            console.log('----DATA----');*/
            console.log(data[i].assessment.tax.taxamt);
        };

       //console.log(response);
    })
    .catch(function(error){
        if(error.response){
            console.log("RESPONSE ERROR: ", error.message);
        } else if (error.request){
            console.log(error.request);
        } else {
            console.log("REQUEST ERROR: ", error.message);
        }
        console.log(error.config);
    });