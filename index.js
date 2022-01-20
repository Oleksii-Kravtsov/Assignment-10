const express = require('express')
const bodyParser = require('body-parser')
const { response } = require('express')
const app = express()
const port = 3000

const query = require('./queries')

app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
)

app.get("/", (req, res) => {
    res.json({info:'getting shit done around here'})
})

app.get('/location', query.getLocation)


app.listen(port, ()=>{
    console.log("App is running on port 3000")
})

