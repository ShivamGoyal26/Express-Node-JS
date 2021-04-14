const express = require('express')
const path = require('path')

const app = express()
app.use(express.static('./public'))  // setup static and middleware

// app.get("/", (req, res) => {
//     res.sendFile(path.resolve(__dirname, 'navbar-app/index.html'))
// })

app.get("/about", (req, res) => {
    res.status(200).send("About Page")
})

app.all('*', (req, res) => {
    res.status(404).send("<h1>Resoure Not Found</h1>")
})

app.listen(5000, () => {
    console.log("Server Listening On 5000...")
})

// app.get
// app.post 
// app.put
// app.delete
// app.all
// app.use
//app.listen