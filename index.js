// you can get the boiler plate of express js from https://expressjs.com/en/starter/hello-world.html
// const express = require('express')
// const app = express()
// const port = 3000

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })

// practice

const express = require("express");

const app = express()
const port = 3000

app.set("view engine", "ejs")

app.get("/", (req, res) => {
    console.log("Here");
    res.render("index")
})

app.listen(port, () => {
    console.log(`Server is running in port ${port}`)
})