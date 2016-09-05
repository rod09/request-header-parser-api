var express = require("express");
var app = express();

app.get('/', (req, res) => {
    res.send(req.ip);
});

app.listen(8080, () => {
   console.log('listening to app in port 8080');
});