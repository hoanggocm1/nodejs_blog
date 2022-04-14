const { json } = require('express/lib/response');

const { mutipleMongooseToOject } = require('../../util/mongoose');
const { mongooseToOject } = require('../../util/mongoose');

const Course = require('../models/Course');
class SiteController {
    index(req, res, next) {
        // res.render('home');
        //cach nay hoi dai dong nen viet lai ngan gon hon, su dung
        //    Course.find({},function(err, courses){
        //         if(!err){
        //             res.json(courses)
        //         }else{
        //             res.status(400).json({error:'ERROR'});
        //         }
        //    });

        Course.find({})

            .then((courses) => {
                res.render('home', {
                    title: 'Home',
                    courses: mutipleMongooseToOject(courses),
                });
            })
            .catch(next);
    }

    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
