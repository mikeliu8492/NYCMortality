var express = require('express');
var request = require('request');
var https = require('https');
var html = require('html');
var path = require('path');
var router = express.Router();

var app = express();

var port = process.env.PORT || 5000;

var https = require('https');

//View Engine
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

var colArray = ['Year', 'Leading Cause of Death', 'Sex', 'Deaths', 'Death Rate (per 100,000 population)', 'Death Rate Adjusted by Age (per 100,000 population)'];
const url = "https://data.cityofnewyork.us/api/views/jb7j-dtam/rows.json?accessType=DOWNLOAD"

app.use(express.static(path.join(__dirname + '/public')));

function DataPageRender(url, ethnicity, label, res) {
    request.get(url, (error, response, body) => {
        if (!error || response == 200) {
            let json = JSON.parse(body);
            let currentData = json.data;

            res.render("datapage.ejs", { title: ethnicity, jsonData: currentData, columnArray: colArray, filterLabel: label })
        } else {
            res.send("an error occured!!!!")
        }

    });
};

//homepage
app.get('/', function(req, res, next) {
    res.render("index.html");
});


/*pages for data display */
app.get('/asian', function(req, res) {
    DataPageRender(url, "Asian/Pacific Islander", "Asian and Pacific Islander", res);
});

app.get('/black', function(req, res) {
    DataPageRender(url, "Black Non-Hispanic", "Black Non-Hispanic", res);
});

app.get('/white', function(req, res) {
    DataPageRender(url, "White Non-Hispanic", "White Non-Hispanic", res);
});

app.get('/hispanic', function(req, res) {
    DataPageRender(url, "Hispanic", "Hispanic", res);
});

app.get('/other', function(req, res) {
    DataPageRender(url, "Other Race/ Ethnicity", "Other Race/ Ethnicity", res);
});

app.get('/unknown', function(req, res) {
    DataPageRender(url, "Not Stated/Unknown", "Not Stated/Unknown", res);
});

app.listen(port, function() {
    console.log('Running my app on PORT: ' + port);
});