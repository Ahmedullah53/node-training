const Product = require('../models/product')

exports.getHome = (req, res, next) => {
    Product.findAll()
    .then(products => {
        res.render('main', { pageTitle:'Home', path:'/', products:products})
    }).catch(err => console.log(err) )
}

exports.getAddProduct = (req, res, next) => {
    res.render('addProd', { pageTitle:'Add Product', path:'/add-product'})
}

exports.postAddProduct = (req, res, next) => {
    const {title, imgUrl, price, desc} = req.body
    Product.create({
        title: title,
        imgUrl: imgUrl,
        price: price,
        desc: desc
    }).then(result => {
        console.log('Product added')
    }).catch(err => {
        console.log('there is some issue with sequelize or your database')
        console.log(err)
    })
    res.redirect('/')
}

exports.getEditProduct = (req, res, next) => {
    const {id} = req.query
    console.log(id)
    Product.findByPk(id)
    .then( product => {
        res.render('editProd', { pageTitle:product.title, path:'/edit-product', product:product })
    })
    .catch(err => console.log(err))
}

exports.postEditProduct = (req, res, next) => {
    console.log('in post edit')
    const {id, title, imgUrl, price, desc} = req.body
    Product.update({
        title:title,
        imgUrl:imgUrl,
        price:price,
        desc:desc
    }, {
        where:{
            id:id
        }
    })
    .then(result => {
        console.log('Product updated')
        res.redirect('/')
    })
    .catch(err => console.log(err))
}

exports.postDelProduct = (req, res, next) => {
    Product.destroy({
        where: {
            id:req.body.id
        }
    }).then(result => {
        console.log('Product Deteted')
        res.redirect('/admin-product')
    }).catch(err => console.log(err))
}

exports.getAdminProduct = (req, res, next) => {
    Product.findAll()
    .then(products => {
        res.render('adminProd', { pageTitle:'Admin', path:'/admin-product', products:products})
    }).catch(err => console.log(err) )
}