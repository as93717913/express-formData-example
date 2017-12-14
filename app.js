const express = require('express');
var bodyParser = require('body-parser');
var multiparty = require('multiparty');
const app = express();
app.use(bodyParser.urlencoded());

app.post('/receive', (req, res, next) => {

    console.log('in receive')
    var form = new multiparty.Form();
    form.parse(req, function (err, fields, files) {
        console.log(fields)
        console.log(files)
        res.json({status: "OK"})
    });
})
app.listen(6000);