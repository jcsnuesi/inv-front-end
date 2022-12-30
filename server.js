'use strict'

let express = require('express');

let app = express();

app.use(express.static(__dirname +'/dist/inventory-app'));

app.get('/*', (req, res)=> {

    res.sendFile(__dirname +'/dist/inventory-app/index.html')
})


app.listen(process.env.PORT || 8000);