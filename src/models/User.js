const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstName: {
        type: String,
        require: true
    },
    lastName: {
        type: String,
        require: true
    },
    age: {
        type: Number,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    isdeleted: {
        type: Boolean,
        default: false
    }
});

//crear modelo

const User = mongoose.model('User', userSchema);

module.exports = User;