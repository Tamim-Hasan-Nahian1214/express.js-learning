const express = require("express");
const app = express();
const port = 3000;

// Normal Response
app.get('/', (req, res) => {
    res.send("Hello!");
})

// JSON Response
app.get("/user", (req, res) => {
    res.json({
        name: "Tamim",
        age: 17,
        city: "Dhaka"
    });
});

app.listen(port, () => {
    console.log(`The server is running of port ${port}`);
})