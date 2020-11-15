const express = require("express");
const path = require("path");

const app = new express();

// Setting up the View Engine
app.set("view engine", "ejs");

// Serving Static content
app.use(express.static(path.join(__dirname, "public")));

app.get('/', function(req, res){
    res.render('./index')
})

// Launch the server
const PORT = process.env.PORT || 7000;
app.listen(PORT, function () {
  console.log(`Server running on PORT ${PORT}`);
});