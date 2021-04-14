const express = require('express')
const app = express()
const logger = require('./logger')
const authorize = require('./authorize')

// app.use([logger, authorize])

// app.use("/api", logger)
// Here this middleware is gonna apply to all those routes starts with the "/api"

app.get("/", (req, res) => {
    res.send("Home")
})

app.get("/about", (req, res) => {
    res.send("About Page")
})

app.get("/api/products",[logger, authorize], (req, res) => {
    res.send("Products")
})

app.get("/api/items", (req, res) => {
    res.send("Items")
})

app.listen(5000, () => {
    console.log("Server listening on the port 5000...")
})