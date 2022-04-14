const newsRouter = require('./news');
const siteRouter = require('./site');
const courseController = require('./course');
function route(app) {
    //   app.get('/news', (req, res) => {
    //     res.render('news');
    //   })
    app.use('/news', newsRouter);
    app.use('/courses', courseController);

    app.use('/', siteRouter);
}
module.exports = route;
