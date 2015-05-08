var mongoose = require('mongoose');
var bcrypt = require('bcrypt');


var userSchema = new mongoose.Schema ({
	name: {type: String, required: true },
	email: { type: String, required: true, unique: true },
	password: { type: String, required: true },
	cart: [],
	orders: []

});


userSchema.pre('save', function(next) {
    var user = this;
    this.timestamp = new Date();

    bcrypt.genSalt(function(err, salt) {
        if (err) return next(err);
        bcrypt.hash(user.password, salt, function(err, hash) {
            if (err) return next(err);
            else {
                user.password = hash;
                next();
            }
        })
    })
})

userSchema.methods.comparePw = function(password) {
    var user = this;
    bcrypt.compare(password, user.password, function(err, res) {
        if (err) return cb(err)
        else return cd(res)
    })

}


module.exports = mongoose.model('User', userSchema);