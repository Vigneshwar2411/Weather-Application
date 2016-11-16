var app = require('express')();
var request = require('request');

var appId = "4410b55b4e4e850ef4508941344cc768";



app.get("/v1/getcitydata/:city",function(req,res) {
    console.log("Inside get city data api call");
    var cityname = req.params.city;
    console.log("Inside api call for city data",cityname);
    var apiUrl = "http://api.openweathermap.org/data/2.5/forecast?q="+cityname+"&mode=json&units=metric&appid="+appId;
    console.log(apiUrl);
    request({
          url: apiUrl,
          json: true
        }, function (error, response, body) {
          if (!error) {
            console.log("Body",body);
            return res.status(200).send({data:body});
        } else {
            console.log(error);
            return res.status(400).json(error);
        }
        })
});

module.exports = app;
