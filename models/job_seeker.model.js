const mongoose = require('mongoose')

const Job_Seeker = mongoose.model('job_seekers', {
    name: {
        type: String,
        required: true
    }
})

module.exports = Job_Seeker