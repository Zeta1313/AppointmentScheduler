//import express module

import express from 'express'

// Require express framework
const express = require("express")
const PORT = 3005
// Instantiate express
const app = express()



//create an Arrray for appointment 
const submissions = []

// Define a default route
app.get('/', (req, res) => {
    res.sendFile(`${import.meta.dirname}/views/home.html`)
})

app.get('/admin', (req, res) => {
    res.send(submissions)
})
app.post('/first', (req, res) => {
    if (fname == null || lname == null) {
        document.getElementById("er").style.display = "block"
    }
    else {
        const newest = {
            fname: req.body.fname,
            lname: req.body.lname,
            date: req.body.date,
            time: req.body.time,
            timestamp: Date.now()
        }
        submissions.push(newest)
        res.sendFile(`${import.meta.dirname}/views/home2.html`)
    }


})





app.listen(PORT, () => {
    console.log('Server running on http://localhost:3005')
})