const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const app = express();
const route = require('./routes');
const PORT = 3000;

const db = require('./config/db');
db.connect()

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }))


// template engine
app.engine('hbs', exphbs.engine({
    extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));
// route init
route(app)

app.listen(PORT, () => console.log(`App listening at http://localhost:${PORT}`));