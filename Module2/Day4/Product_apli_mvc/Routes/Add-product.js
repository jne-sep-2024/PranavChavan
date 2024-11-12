const express = require('express');
const router = express.Router();
const productController = require('../controller/productController');
console.log("Route Add- product")


router.get('/',productController.homePage);

router.get('/add-product', productController.addProductPage);
router.post('/Product-added', productController.addProduct);
router.get('/products', productController.listProducts);

module.exports = router;
 