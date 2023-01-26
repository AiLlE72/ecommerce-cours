const Sequelize = require('sequelize')
const Products = require('../models/productModel');
const Category = require('../models/categoryModel');


module.exports = {
    get: async (req, res) => {

        const products = await Products.findAll({
            include: Category,
            raw: true,
            nest: true
        })
        res.render('products', { products })

    },

    getForm: async (req, res) => {
        const categories = await Category.findAll( {raw:true})
        const product = await Products.findByPk(req.params.id,  {include: Category, raw: true, nest: true})
        res.render('form_product', { categories, product })
    },

    post: async (req, res) => {
        let isBest
        if (req.body.isBest === "on") {
             isBest = true
        } else {
             isBest = false
        }
        console.log(isBest);
        await Products.create({
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            isBest: isBest,
            quantity: req.body.quantity,
            // imageUrl: req.body.imageUrl,
            weight: req.body.weight,
            categoryId: req.body.categoriesId
        })
        res.redirect('/product-list')

    },
    put: async (req, res) => {
        let isBest
        if (req.body.isBest === "on") {
             isBest = true
        } else {
             isBest = false
        }
        await Products.update({
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            isBest: isBest,
            quantity: req.body.quantity,
            // imageUrl: req.body.imageUrl,
            weight: req.body.weight,
            categoryId: req.body.categoriesId
        }, {
            where: {
              id: req.params.id
            }})
            res.redirect('/product-list')
    },

    delete: async (req, res) => {
        await Products.destroy({
            where: {
                id: req.params.id
            }
        })
        res.redirect('/product-list')
    }





}