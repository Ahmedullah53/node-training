const mongodb = require('mongodb')

const MongoClient = mongodb.MongoClient
let _db

const mongoConnect = (callBack) => {
    MongoClient.connect('mongodb+srv://imcpak:abcd.1234@cluster0-tkbqj.gcp.mongodb.net/<dbname>?retryWrites=true&w=majority')
    .then(client => {
        console.log('Connecting...')
        _db = client.db()
        callBack()
    })
    .catch(err => console.log(err))
}

const getDb = () => {
    if (_db) {
        return _db
    }
    throw 'No databace found'
}

exports.mongoConnect = mongoConnect
exports.getDb = getDb