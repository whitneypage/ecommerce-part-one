var User = require('./user.js');


module.exports = {


    post: function(req, res) {
        var newUser = new User(req.body);
        newUser.save(function(err, result) {
            if (err) return res.status(500).send(err);
            res.send(result);
        });
    },



}



 User.find(req.query, function(err, response) {
        response.comparePW(req.body.password, function(results) {
            res.send(results);
        })
    },