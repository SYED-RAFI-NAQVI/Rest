const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1/restModel', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})