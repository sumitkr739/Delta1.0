const express = require("express");
const app = express();
const path = require("path");

const port =8080;

// app.set("view engine", "ejs");
// app.set("views", path.join(_dirname, "/views"));

app.get("/", (req, res) => {
    res.render("home.ejs");
});

app.get("/hello", (req, res) => {
    res.send("hello");
});

// app.get("/ig/:username", (req, res) => {
//     let {username} = req.params;
//     res.render("Instagram.ejs", {username});
// });

app.get("/ig/:username", (req, res) => {
    let {username} = req.params;
    const instaData = require("./data.json");
    const data = instaData[username];
    console.log(data);
    res.render("instagram.ejs", { data });
});

app.listen(port, () => {
    console.log(`app is listening on the port ${port}`);
});