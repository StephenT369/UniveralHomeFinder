var axios = require("axios");
axios.default.defaults.headers.common['apikey'] = '4c0b6b2cba6a096ddb09064a579ab77e';
axios.default.defaults.headers.common['Accept'] = 'application/json';
var apikey = "4c0b6b2cba6a096ddb09064a579ab77e"
attomUrl = "https://api.gateway.attomdata.com/areaapi/v2.0.0/state/lookup?apikey" + apikey;

axios.default.get(attomUrl).then(
    function(response){
        var data = response.data.response.result.package.item;

        for(i=0; i < data.length; i++){
            console.log(data[i].abbreviation);
        };
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