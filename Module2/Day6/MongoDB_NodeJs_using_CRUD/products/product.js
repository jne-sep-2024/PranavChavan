const getDb = require('../util/database').getDb;

class Product {
    constructor(title, price, description, imageurl) {
        this.title = title;
        this.price = price;
        this.description = description;
        this.imageurl = imageurl;

    console.log(typeof imageurl+".............dsa;ufgiueseiwou")
    }
    save() {
        const db = getDb();
        return db.collection('products').insertOne(this)
            .then(result => {
                console.log('Product saved:', result);
            })
            .catch(err => {
                console.error('Error saving product:', err);
                throw err; 
            });
    }
}

module.exports = Product;
