const mongoose = require('mongoose')

const Restaurent_Owner = mongoose.model('restaurent_owners', {
    name: {
        type: String,
        required: true,
        trim: true,
    }, gender: {
        required: true,
        type: String,
        enum: ['M', 'F'],
        uppercase: true
    }, age: {
        type: Number
    }, email: {
        type: String,
        lowercase: true,
        required: true,
        trim: true,
        validate: {
            isAsync: true,
            validator: function (value, isValid) {
                const self = this;
                return self.constructor.findOne({ email: value })
                    .exec(function (err, restaurent_owner) {
                        if (err) {
                            throw err;
                        }
                        else if (restaurent_owner) {
                            if (self.id === restaurent_owners.id) {
                                return isValid(true);
                            }
                            return isValid(false);
                        }
                        else {
                            return isValid(true);
                        }

                    })
            },
            message: 'The email address is already taken!'
        },
    }, phone_number: {
        required: true,
        type: Number,
        trim: true,
        min: 10,
        validate: {
            isAsync: true,
            validator: function (value, isValid) {
                const self = this;
                return self.constructor.findOne({ phone_number: value })
                    .exec(function (err, restaurent_owner) {
                        if (err) {
                            throw err;
                        }
                        else if (restaurent_owner) {
                            if (self.id === restaurent_owners.id) {
                                return isValid(true);
                            }
                            return isValid(false);
                        }
                        else {
                            return isValid(true);
                        }

                    })
            },
            message: 'The Phone Numbere is already taken!'
        },
    }, restaurent_name: {
        type: String,
        trim: true,
        required: true
    }
})

module.exports = Restaurent_Owner