const express = require('express')
const app = express()
const port = 3000
const db = require('./dbModule')

//Connection to database
db.connectToMongoose('webshop')

//SET
app.set('view engine', 'ejs');

//GET
app.get("/", (req, res) => {
    res.render('pages/index')
  });

app.listen(port, () => console.log(`Server listening on port ${port}!\nAccess the site on http://localhost:${port}`))