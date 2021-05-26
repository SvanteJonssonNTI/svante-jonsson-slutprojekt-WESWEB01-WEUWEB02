const mongoose = require('mongoose');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    //Connected
});

exports.connectToMongoose = (collection) =>{ //connects to mongoDB with inputted collection name
  mongoose.connect(`mongodb://localhost/${collection}`, { useNewUrlParser: true, useUnifiedTopology: true });
}

exports.saveToMongoose = (model) => { //saves model to mongoDB
  model.save(()=>{
    console.log("Input successfully saved to database")
  })
}