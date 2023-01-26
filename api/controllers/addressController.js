const Address = require("../models/addressModel")

module.exports = {
    get: (req, res) => {
        res.render('form_address')
    },
    post: async (req, res) => {

         await Address.create({
            addressName: req.body.Address,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            number: req.body.number,
            street: req.body.street,
            postcode: req.body.postcode,
            city: req.body.city,
            country: req.body.country
        })
        
        res.redirect('/')

    }
}