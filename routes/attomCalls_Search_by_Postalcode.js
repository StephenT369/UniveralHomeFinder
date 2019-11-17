require("dotenv").config();
var axios = require("axios");
axios.default.defaults.headers.common["apikey"] = process.env.apikey;
axios.default.defaults.headers.common["Accept"] = process.env.Accept;

var postalCode = 75205;
var pageSize = 2;
attomUrl = 
"https://api.gateway.attomdata.com/propertyapi/v1.0.0/property/address?"+
"postalcode="+ postalCode +
"&pagesize="+ pageSize;

axios.default.get(attomUrl).then(
    function(response){
        var data = response.data.property;

        for(i=0; i < data.length; i++){
           console.log(data[i].address.line1);
           console.log('----DATA----');
           console.log(data);
           console.log('----DATA----');
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