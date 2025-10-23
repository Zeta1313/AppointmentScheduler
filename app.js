
import express from 'express'

const app = express()
const PORT = 3005
app.use(express.static('public'))
app.use(express.urlencoded({ extended: false }))

//create an Arrray for appointment 
const submissions = []



// Define a default route
app.get('/', (req, res) => {
    res.sendFile(`${import.meta.dirname}/views/home.html`)
    //res.sendFile('views/home.html', { root: '.' })
})
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
})

app.get('/admin', (req, res) => {
    res.send(submissions)
})



// Handle form submissions
app.post('/submissions', (req, res) => {


    const newest = {
        fname: req.body.fname,
        lname: req.body.lname,
        date: req.body.date,
        time: req.body.time,
        timestamp: Date.now(),
    }

    submissions.push(newest)
    console.log(newest)

    res.sendFile(`${import.meta.dirname}/views/submissions.html`)
})



