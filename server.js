const express = require("express");
const path = require('path');
const app = express(); 
const port = 80; 

app.set('view engine', 'ejs'); 
app.set("views", path.join(__dirname, "_app", "views"));
app.use(express.static(path.join(__dirname, '_app', 'immutable')));

const homeRoute = require("./_app/views/routes/home");
const aboutRoute = require("./_app/views/routes/about");
const contactRoute = require("./_app/views/routes/contact"); 

app.use("/", homeRoute); app.use("/hakkimda", aboutRoute); 
app.use("/iletisim", contactRoute); 

app.listen(port, () => { 
    console.log("Sunucu localhost:${port} adresinde çalışıyor."); 
});