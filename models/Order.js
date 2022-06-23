const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    movie: {
        type: String,
        required: true
    },
    clientId: {
        type: String,
        required: true,
        unique: true
    },
    return: {
        type: Date,
        required: true,
        
    },
  
    
},
{
    timestamps: true
}
);

const User = mongoose.model('Order', UserSchema);

module.exports = Order;