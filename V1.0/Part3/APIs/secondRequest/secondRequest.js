const request = require("request");
request("https://pokeapi.co/api/v2/pokemon/1/", function (error, response, body) {
    let parsedData = JSON.parse(body);
    console.log("USING POKEAPI AND REQUEST PACKAGE:")
    console.log(parsedData.name + " weighs " + parsedData.weight);
});

// ES6 syntax w request-promise
const rp = require("request-promise");

rp('https://jsonplaceholder.typicode.com/users/1')
    .then((body) => {
        console.log("USING JSONPLACEHOLDER AND REQUEST-PROMISE PACKAGE:")
        const pD = JSON.parse(body);
        console.log(`${pD.name} lives in ${pD.address.city}`);
    })
    .catch((err) => {
        console.log("Error: " + err);
    })