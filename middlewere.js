const express = require("express");
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send("Home!")
})

app.use((req, res ,next) => {
    console.log("I will run in any routes!");
    app.next();
})

app.listen(port, () => {
    console.log(`Server is running on localhost:${port}.`)
})