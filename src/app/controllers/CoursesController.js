const Course = require('../models/Course')
const { multipleMongooseToObject, mongooseToObject } = require('../../util/mongoose')
class CousesController {


    // [GET] /courses
    index(req, res, next) {
        Course.find({})
            .then(courses => {
                res.render('courses/courses', { courses: multipleMongooseToObject(courses) });
            })
            .catch(next)
    }

    // [GET] /courses/:slug
    show_detail(req, res, next) {
        Course.findOne({ slug: req.params.slug })
            .then(course => {
                res.render('courses/show_detail', { course: mongooseToObject(course), layout: 'layout1.hbs' });
            })
            .catch(next)
    }

    // [POST] /create
    create(req, res, next) {
        const course = new Course(req.body)
        course.save()
        res.redirect('/courses')
    }

    // [POST] /:_id/edit
    edit(req, res, next) {
        Course.findById(req.params._id)
            .then(course => {
                res.render('courses/show_detail', { course: mongooseToObject(course), layout: 'layout1.hbs' });
            })
            .catch(next)
    }

    // [POST] /create
    delete(req, res, next) {
        const course = new Course(req.body)
        course.save()
        res.redirect('/courses')
    }
}
module.exports = new CousesController;
