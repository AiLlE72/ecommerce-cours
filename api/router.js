const express = require('express')

const router = express.Router()

const homeController = require('./controllers/homeController')
const categoryController = require('./controllers/categoryController')
const productController = require('./controllers/productController')
const userController = require('./controllers/userController')
const adminController = require('./controllers/adminController')
const addressController = require('./controllers/addressController')

//page d'acceuil
router.route('/')
    .get(homeController.get)

//acces au back office
router.route('/back-office')
    .get(adminController.get)

//gestion des categories
router.route('/category-create')
    .post(categoryController.post)

router.route('/category-list')
    .get(categoryController.get)

router.route('/form-category-update')
    .get(categoryController.getUpdate)

router.route('/form-category-update/:id')
    .post(categoryController.update)

router.route('/category-delete/:id')
    .post(categoryController.delete)


//gestion des produits
router.route('/products-create')
    .get(productController.getForm)
    .post(productController.post)

router.route('/product-list')
    .get(productController.get)

router.route('/product-update/:id')
    .get(productController.getForm)
    .put(productController.put)

router.route('/product-delete/:id')
    .delete(productController.delete)

//gestion des utilisateurs
router.route('/sign-up')
    .get(userController.get)
    .post(userController.post)

router.route('/user-list')
    .get(userController.read)

router.route('/user-update/:id')
    .get(userController.update)

router.route('/sign-in')
    .get(userController.getSignIn)
    .post(userController.postSignin)

//gestion des adresses
router.route('/address-create')
    .get(addressController.get)
    .post(addressController.post)


module.exports = router