const { layout } = require('../utils');
const bcrypt = require('bcryptjs');
const { User } = require('../models');

const signup = (req, res) => {
    res.render('signup', {
        locals: {
            title: 'Register'
        },
        ...layout
    })
};

const processNewUser =  async (req, res) =>{
    const { username, password } = req.body;
    console.log(username, password);
    if(username === "" || password === ""){
        alert('You must fill in both the Username and Password');
        res.redirect(`${req.baseUrl}/signup`);
    } else {
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt);
        try {
            const newUser = await User.create({
                username,
                hash
            });
            res.redirect('/');
        } catch(error){
            console.log(error);
            if(error.name == "SequelizeUniqueConstraintError" ){
                alert('Username is taken');
            }
            res.redirect(`${req.baseUrl}/signup`);
        }
    } 
};


module.exports = {
    signup,
    processNewUser
}