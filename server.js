var express = require("express");
var app = express();

app.get('/', (req, res) => {
    var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    var language = req.acceptsLanguages()[0];
    var os = req.headers['user-agent'];

    res.send(JSON.stringify({
        ipaddress: ip,
        language: language,
        software: os
    }));
});

app.listen(8080, () => {
   console.log('listening to app in port 8080');
});