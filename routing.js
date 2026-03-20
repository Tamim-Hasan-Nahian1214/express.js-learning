const express = require("express");
const app = express();
const port = 3000;

//Home route
app.get('/', (req, res) => {
    res.send("Welcome to Home Page!")
})

//About route
app.get('/about', (req, res) => {
    res.send("Welcome to About Page!")
})

//Contact route
app.get('/contact', (req, res) => {
    res.send("Welcome to Contact Page!")
})


app.listen(port, () => {
    console.log(`server is running on port ${port}`)
})