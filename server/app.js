const express = require('express')
const app = express()
const port = 3000

//SET
app.set('view engine', 'ejs');

//GET
app.get("/", (req, res) => {
    res.render('pages/index')
  });

app.listen(port, () => console.log(`Example app listening on port ${port}!`))