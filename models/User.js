const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
        //maxlength: 16
    },
    rent: {
        type: Boolean,
        //default: true
    }/*
    role: {
        type: String,
        enum: ['user', 'admin'],//usuario no borra registro alquiler
        default: 'user'
    }*/
},
{
    timestamps: true
}
);

const User = mongoose.model('User', UserSchema);

module.exports = User;
 