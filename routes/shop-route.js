const express = require('express');
const shopCtrl = require('../Controllers/shop-ctrl');

const router = express.Router();

router.post('/', shopCtrl.createShop)
router.get('/', shopCtrl.getAllShop)
router.put('/:id', shopCtrl.updateShop)
router.delete('/:id', shopCtrl.deleteShop)
router.get('/:id', shopCtrl.getShopById)




module.exports = router;