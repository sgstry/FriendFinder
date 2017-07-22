var path = require('path');

module.exports = function(app){

    app.get('/survey', function(req, res){
    	console.log('Getting survey page...');
        res.sendFile(path.join(__dirname,'../public/survey.html'));
    });

    app.get('/javascript/takesurvey.js', function(req, res){
        res.sendFile(path.join(__dirname,'../public/javascript/takesurvey.js'));
    });

    app.get('/css/survey.css', function(req, res){
        res.sendFile(path.join(__dirname,'../public/css/survey.css'));
    });

    app.use(function(req, res){
       res.sendFile(path.join(__dirname, '../public/home.html'));
   });
}