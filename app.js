const express = require('express')
const app = express()


app.get("/", logger, (req, res) => {
    res.send("Home")
})

app.get("/about", logger, (req, res) => {
    res.send("About Page")
})

app.listen(5000, () => {
    console.log("Server listening on the port 5000...")
})