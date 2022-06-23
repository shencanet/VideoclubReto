const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    movie: {
        type: String,
        required: true
    },
     movieId: {
        type: String,
        required: true,
        minlength: 6,
        maxlength: 16
    },
    actor: {
        type: String,
    },
    gender: {
        type: String,
        enum: ['Action', 'Thriller','Horror', 'Comedy' ],
        default: 'Action'
    }
},
{
    timestamps: true
}
);

const User = mongoose.model('Movie', UserSchema);

module.exports = Movie;