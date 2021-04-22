const mongoose = require('mongoose');

//Creates the UserSchema
const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

const User = mongoose.model("User", UserSchema);

//Function creates a new user
exports.createUser = (emailIN, passwordIN) => {
    return new User({
        email: emailIN,
        password: passwordIN,
    })
}

//Exports a User
module.exports = User;