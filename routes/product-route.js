const express = require('express');
const productCtrl = require('../controllers/product-ctrl');

const router = express.Router();
router.post('/', productCtrl.createProduct)
router.put('/:id',productCtrl.updateProduct)
router.delete('/:id',productCtrl.deleteProduct)
router.get('/:id',productCtrl.getProductById)
router.get('/',productCtrl.getAllProducts)



module.exports = router;