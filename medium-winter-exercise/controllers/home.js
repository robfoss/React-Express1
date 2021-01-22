const { layout } = require('../utils');
const bcrypt = require('bcryptjs');
const { User } = require('../models');




const home = (req, res) => {
    res.render('login', {
        locals: {
            title: 'Home Page'
        },
        ...layout
    });
};

const processLogin = async (req, res) => {
    const { username, password } = req.body;
    //Get the username
    const user = await User.findOne({
        where: {
            username
        }
    });
    if(user) {
        //If theres a user, check password
        const isValid = bcrypt.compareSync(password, user.hash);
        if(isValid) {
            req.session.user = {
                username,
                id: user.id
            };
            //save the session and redirect them to members area
            req.session.save(() => {
                res.redirect('/restricted');
            });
        } else {
            console.log('not valid password');
            res.redirect('/')
        }
    } else {
        //If username not valid redirect to signup
        console.log('not valid user')
        res.redirect('/signup')
    }
};


module.exports = {
    home,
    processLogin
}