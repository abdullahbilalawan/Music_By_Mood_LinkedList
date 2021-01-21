const express = require('express');
const ejsMate = require('ejs-mate');
var require = require('rw')
const app = express();
app.engine('ejs', ejsMate)
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('pages/front')

})



app.use(express.static('public'))
app.listen(9000, () => {
    console.log('Serving on port 8000')
})

