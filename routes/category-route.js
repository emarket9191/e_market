const express = require('express');
const categoryCtrl = require('../Controllers/category-ctrl');

const router = express.Router();

router.post('/', categoryCtrl.createCategory)
router.get('/', categoryCtrl.getAllCategories)
router.put('/:id', categoryCtrl.updateCategory)
router.delete('/:id',categoryCtrl.deleteCategory)
router.get('/:id', categoryCtrl.getCategoryById)