var request = require("request");
request("http://www.google.com", function (error, response, body) {
    if (!error && response.statusCode == 200) {
        console.log("REQUEST MADE SUCCESFULLY, TO CHECK THE BODY, CHANGE THE CODE");
    }
    else {
        console.log("SOMETHING WENT WRONG: " + error);
    }
});
