const mongodb = require('mongodb')
const getDb = require('../util/database').getDb
class Product{
    constructor(title, imgUrl, price, desc){
        this.title = title
        this.imgUrl = imgUrl
        this.price = price
        this.desc = desc
    }

    save(){
        const db = getDb()
        return db.collection('products').insertOne(this)
        .then(result => {
            console.log(result)
        })
        .catch(err => {
            console.log(err)
        })
    }

    static fetchAll(){
        const db = getDb()
        return db
        .collection('products')
        .find()
        .toArray()
        .then(products => products)
        .catch(err => console.log(err))
    }

    static findByPk(id){
        const db = getDb()
        return db
        .collection('products')
        .find({ _id: mongodb.ObjectID(id)})
        .next()
        .then(product => {
            console.log(product)
            return product
        })
        .catch(err => console.log(err))
    }

    update(id){
        const db = getDb()
        console.log('updating...')
        return db.collection('products')
        .updateOne({ _id: mongodb.ObjectId(id)}, {$set: this})
        .then(result => {
            console.log(result)
        })
        .catch(err => {
            console.log(err)
        })
    }

    static delete(id){
        const db = getDb()
        return db
            .collection('products')
            .deleteOne({ _id : mongodb.ObjectId(id)})
            .then(result => console.log('Product deteted'))
            .catch(err => console.log(err))
    }
}

module.exports = Product