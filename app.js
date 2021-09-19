const express = require("express");
const app = express();
const mongoose = require("mongoose");
const db = require("./confg/keys").mongoURI;
const users = require("./routes/api/users");
const tweets = require("./routes/api/tweets");
const User = require("./models/User");
const bodyParser = require('body-parser');
const passport = require('passport');

mongoose
    .connect(db, { useNewUrlParser: true })
    .then(() => console.log("Connected to mongoDB"))
    .catch(err => console.log(err));

app.use(bodyParser.urlencoded({
    extended: false
}));


app.use(passport.initialize());
require('./confg/passport')(passport);

app.use(bodyParser.json());


app.get("/", (req, res) => {
    const user = new User({
        handle: "hansaem",
        email: "hansaem@hansaem.com",
        password: "hansaem"
    })
    user.save();
    res.send("Hello World!");
});

app.use("/api/users", users);
app.use("/api/tweets", tweets);

const port = process.env.PORT || 5000;

app.listen(port, () => {console.log(`Listening on port ${port}`)});