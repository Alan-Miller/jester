const axios = require('axios');

module.exports = {

    getProducts: function (url) {
        return axios.get(url).then(resp => {
            return resp.data
        });
    }
    ,
    getSums: function () {
        return [2, 4, 5, 7];
    }
    ,
    getEmpTimeCard(url) {
        // console.log("hey")
        return axios.get(url).then(response => {
            // console.log('WHERE AM I?', response)
            return response.data;
        })
    }

}