const express = require('express');
const path = require('path');
const { mongodbConnect, getDb } = require('./util/database'); 
const Product = require('./products/product');
const mongodb = require('mongodb'); 

const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

mongodbConnect(() => {
    app.listen(8080, () => {
        console.log('Server is running on port 8080');
    });
});


app.post('/products', (req, res) => {
    const { title, price, description, imageurl } = req.body;

    if (!title || !price || !description || !imageurl) {
        return res.status(400).send('All fields are required');
    }

    const newProduct = new Product(title, price, description, imageurl);
    
    newProduct.save()
        .then(() => {
            res.status(201).send('Product saved successfully');
        })
        .catch(err => {
            console.error(err);
            res.status(500).send('Failed to save product');
        });
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
    const db=getdb();
    console("data is getting load")
    
    
});


app.get('/products', (req, res) => {
    const db = getDb();
    console.log("Fetching products...");

    db.collection('products')
        .find()
        .toArray()
        .then(products => {
            console.log("Products fetched:", products);
            // res.status(200).json(products);
        })
        .catch(err => {
            console.error("Error fetching products:", err);
            res.status(500).send('Failed to fetch products');
        });
});


app.delete('/products/:id', (req, res) => {
    const productId = req.params.id;
    const db = getDb();

    db.collection('products')
        .deleteOne({ _id: new mongodb.ObjectId(productId) }) 
        .then(result => {
            if (result.deletedCount === 1) {
                res.status(200).send('Product deleted successfully');
            } else {
                res.status(404).send('Product not found');
            }
        })
        .catch(err => {
            console.error('Error deleting product:', err);
            res.status(500).send('Failed to delete product');
        });
});
