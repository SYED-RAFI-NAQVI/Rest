const express = require('express')
const app = express()
require('./db/db')


const { isEmail } = require('validator')

const Job_Seeker = require('./models/job_seeker.model')
const Restaurant_Owner = require('./models/restaurent_owner.model')

app.use(express.json())

app.post('/signup', (req, res) => {

    if (!isEmail(req.body.email)) {
        throw new Error('email is invalid')
    }

    if (req.body.sign_up_type == 'ro') {
        const restaurent_owner = new Restaurant_Owner(req.body)
        restaurent_owner.save().then((result) => {
            res.send('added')
        }).catch((err) => {
            res.status(400).send(err)
        })
    } else if (req.body.sign_up_type == 'js') {
        const job_seeker = new Job_Seeker(req.body)
        job_seeker.save().then((result) => {
            res.send('added')
        }).catch((err) => {
            res.status(400).send(err)
        })
    }
})

const port = process.env.port || 3000
app.listen(port, console.log(`running on port:${port}`))