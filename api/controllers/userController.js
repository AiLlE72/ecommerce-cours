const Role = require('../models/roleModel');
const User = require('../models/userModel')
const bcrypt = require('bcrypt')


module.exports = {
    get: (req, res) => {
        res.render('register')
    },
    post: async (req, res) => {
        const Pass = req.body.password
        const confPass = req.body.confPassword
        if (Pass !== confPass) {
            res.redirect('/sign-in')
        } else {

            const user = await User.create({
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email,
                password: req.body.password,
                phone: req.body.phone
            })
            const role = await Role.findOne({where: {name: 'user'}})
            user.addRole(role)
            res.render('form_address', {user})
        }
    }, 
    read: async (req, res) =>{
        const users = await User.findAll({
            include: Role,
            raw:true,
            nest:true
        })
        res.render('list_users', {users})
    },
    update: (req, res) =>{
        res.render('form_user.hbs')
    },

    getSignIn: (req, res) =>{
        res.render('login')
    }, 
    postSignin: async (req, res) =>{
        const user = await User.findOne({
            raw: true,
            where: {
                email: req.body.email,
            }
        })
        bcrypt.compare(req.body.password, user.password, (err, same) => {
            if (!same) {
                res.redirect('/')
            } else {
                req.session.userId = uses.id
                req.session.firstNname = user.firstName
                
                res.redirect('/')
            }
        })
    }
}