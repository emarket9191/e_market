const express = require('express');
const userCtrl = require('../controllers/user-ctrl');

const router = express.Router();

router.post('/', userCtrl.createUser)
// router.get('/',userCtrl.getAllCustomers)
// router.put('/:id',userCtrl.updateCustomer)
 router.delete('/:id',userCtrl.deleteUser)
// router.get('/name/:id',userCtrl.getCustomerById)
// router.get('/:id',userCtrl.getLectureByCustomerId)
module.exports = router;