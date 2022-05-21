
const newsRouter = require('./news')
const coursesRouter = require('./courses')
function route(app) {
    app.get('/', (req, res, next) => { res.render('courses/courses') })
    app.use('/news', newsRouter);
    app.use('/courses', coursesRouter);
}
module.exports = route;