import axios from 'axios';
const attomUrl ="https://api.gateway.attomdata.com/propertyapi/v1.0.0/assessment/detail?";

export default {
    receiveZipCode: function(query) {
 
        return axios.get(attomUrl + query);
    }

}