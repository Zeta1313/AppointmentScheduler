// Require express framework
const express = require("express"); const PORT = 3005
// Instantiate express
const app = express()
// Define a default route

//create an Arrray for appointment 
const submissions = []

app.post('/', (req, res) => {
    if (fname == null || lname == null) {
        document.getElementById("er").style.display = "block"
    }
    else {
        res.sendFile(`${import.meta.dirname}/views/home2.html`)
    }


})


app.listen(PORT, () => {
    console.log('Server running on http://localhost:3000')
})