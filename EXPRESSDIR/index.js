const express = require("express");
const app = express();


let port = 8080;

app.listen(port, () => {
    console.log(`app is listening on port ${port}`);
});

// app.use((req, res) => {
//     console.log("request received");
// });

app.get("/", (req, res) => {
    res.send("hello i am root");
});

app.get("/:username/:id", (req, res) => {
    console.log(req.params);
    res.send("hello i am root");
});