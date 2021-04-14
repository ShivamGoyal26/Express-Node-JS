const http = require("http")
const { readFileSync } = require('fs')

// Get all files 
const homePage = readFileSync("./navbar-app/index.html")
const homeStyles = readFileSync("./navbar-app/styles.css")
const homeImage = readFileSync("./navbar-app/logo.svg")
const homeLogic = readFileSync("./navbar-app/browser-app.js")

const server = http.createServer((req, res) => {
    const url = req.url;
    console.log(url)
    //Home Page 
    if (url === '/') {
        res.writeHead(200, { 'content-type': "text/html" })
        res.write(homePage)
        res.end()
    }
    //styles
    else if (url === '/styles.css') {
        res.writeHead(200, { 'content-type': "text/css" })
        res.write(homeStyles)
        res.end()
    }
    // Browser-app.js
    else if (url === '/browser-app.js') {
        res.writeHead(200, { 'content-type': "text/javascript" })
        res.write(homeLogic)
        res.end()
    }

    // Logo
    else if (url === '/browser-app.js') {
        res.writeHead(200, { 'content-type': "image/svg+xml" })
        res.write(homeImage)
        res.end()
    }

    // About Page  
    else if (url === '/about') {
        res.writeHead(200, { 'content-type': "text/html" })
        res.write("<h1>About Page</h1>")
        res.end()
    }
    // Not Found Page 
    else {
        res.writeHead(404, { 'content-type': "text/html" })
        res.write("<h1>Page Not Found</h1>")
        res.end()
    }
})

server.listen(5000)
