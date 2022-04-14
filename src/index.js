const express = require('express'); //framework express
const morgan = require('morgan');

const { engine } = require('express-handlebars'); //template engine
var path = require('path'); //path
const app = express(); //express
const port = 3000;
const route = require('./routes');

//kết nối database : import
const db = require('./config/db');
db.connect();

app.use(express.static(path.join(__dirname, 'public')));

app.use(morgan('combined'));

// template engine
app.engine(
    'hbs',
    engine({
        extname: '.hbs', //doi duoi handlebars =>hbs
    }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views')); //path
//==========
// để đổ dữ liệu từ form data ra cần app thư viện
app.use(
    express.urlencoded({
        extended: true,
    }),
); //dữ liệu post từ form data
app.use(express.json()); // dữ liệu từ jquery,ajax

// Route init
route(app);

// app.get('/', (req, res) => {
//   res.render('home');
// })
// app.get('/news', (req, res) => {
//   res.render('news');
// })
// app.get('/search', (req, res) => {
//   res.render('search');
// })
// app.post('/search', (req, res) => {
//   console.log(req.body)
//   res.send('12');
// })
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
