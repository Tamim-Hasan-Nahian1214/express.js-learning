const express = require("express");
const app = express();
const port = 3000;

// Normal Response
app.get('/', (req, res) => {
    res.send("Hello!");
})

// JSON Response
app.get("/users", (req, res) => {
    res.json([
        {name: "Tamim Hasan", age: 13, City: "Dhaka"},
        {name: "Ishmam Jilani", age: 13, City: "Dhaka"},
        {name: "Azmain", age: 14, City: "Dhaka"}
    ]);
});

app.listen(port, () => {
    console.log(`The server is running of port ${port}`);
})