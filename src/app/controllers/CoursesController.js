const Course = require('../models/Course')
class CousesController {
    // [GET] /news
    index(req, res, next) {
        Course.find({})
            .then(courses => res.render('home', courses))
            .catch(next)
    }
}
module.exports = new CousesController;
