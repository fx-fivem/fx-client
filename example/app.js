const express = require("express")
const path = require("path")
const app = express()

app.get("/", (req, res) => {
    res.sendFile(__dirname+"/index.html")
})

app.listen(8932, () => {
    console.log("running >> http://localhost:8932")
})