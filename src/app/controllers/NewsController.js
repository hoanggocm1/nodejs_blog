
class NewsController {
    index(req,res){
        res.render('news');
    }

    show(req,res){
        res.send('show news');
    };
}

module.exports = new NewsController;