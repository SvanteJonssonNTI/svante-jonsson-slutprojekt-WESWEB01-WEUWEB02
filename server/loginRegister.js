const User = require("./models/User")

//Function creates a new user
exports.createUser = (namewIN, emailIN, passwordIN) => {
    return new User({
        name: namewIN,
        email: emailIN,
        password: passwordIN,
    })
}

//Function to findOne in db
exports.findUserWithEmail = async (Model, input) => {
    return await Model.findOne({ email: input });
};

//Finds all users with specified ID
exports.findUserWithID = async (Model, input) => {
    return await Model.findOne({ _id: input });
};