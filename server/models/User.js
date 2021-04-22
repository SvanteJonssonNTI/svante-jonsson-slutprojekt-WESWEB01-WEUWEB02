const mongoose = require('mongoose');

//Creates the UserSchema and exports it
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

exports.createUser = (emailINPUT, passwordINPUT) => {
    return new User({
        email: emailINPUT,
        password: passwordINPUT,
    })
}

module.exports = User;