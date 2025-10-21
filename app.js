// Require express framework
const express = require("express"); const PORT = 3005
// Instantiate express
const app = express()
// Define a default route

//create an Arrray for appointment 
const submissions = []
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

app.get('/admin', (req, res) => {
    res.sendFile(`${import.meta.dirname}/views/home3.html`)
});


app.listen(PORT, () => {
    console.log('Server running on http://localhost:3005')
})