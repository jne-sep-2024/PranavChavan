const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

let _db;

const mongodbConnect = async (callback) => {
    try {
        const client = await MongoClient.connect('mongodb+srv://root:root@cluster1.y0ctw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        _db = client.db('product');
        console.log("Connection Successful");
        callback();
    } catch (err) {
        console.error("Connection Unsuccessful");
        console.error(err);
        process.exit(1); 
    }
};

const getDb = () => {
    if (_db) {
        return _db;
    } else {
        throw new Error("Database not initialized");
    }
};

exports.getDb = getDb;
exports.mongodbConnect = mongodbConnect;
