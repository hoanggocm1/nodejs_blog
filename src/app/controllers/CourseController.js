const Course = require('../models/Course');
const { mongooseToOject } = require('../../util/mongoose');
class CourseController {
    index(req, res, next) {
        res.render('1');
    }

    show(req, res, next) {
        Course.findOne({ slug: req.params.slug })
            .then((course) =>
                res.render('courses/show', { course: mongooseToOject(course) }),
            )
            .catch(next);
    }
}

module.exports = new CourseController();
