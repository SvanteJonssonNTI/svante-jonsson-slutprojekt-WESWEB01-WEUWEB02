const mongoose = require('mongoose');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    //Connected
});

exports.connectToMongoose = (collection) =>{
  mongoose.connect(`mongodb://localhost/${collection}`, { useNewUrlParser: true, useUnifiedTopology: true });
}

exports.saveToMongoose = (model) => {
  model.save(()=>{
    console.log("Input successfully saved to database")
  })
}