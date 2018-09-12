const axios = require("axios");

var requestJobs = function(payload) {
    // Make a request for a user with a given ID
    var data = axios({
        method: "post",
        url: 'https://api.tuckerchapman.com/stackjobs',
        header: {
          'content-type': 'application/json'
      },
        data: payload
      }).then(function (response) {
        // handle success
        console.log(response);
        return response;
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
}

export default {
  requestJobs: requestJobs
}
