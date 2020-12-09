const express = require("express");
const cors = require('cors');
const bodyParser = require("body-parser");

const app = express();

app.use(cors());

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req, res) =>
{
    res.json({message: "Test"});
});

require("./app/routes/materi.routes.js")(app);

app.listen(4000, () =>
{
    console.log("Server is running on port 4000.");
})