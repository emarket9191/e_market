const express = require('express');
const userCtrl = require('../controllers/user-ctrl');

const router = express.Router();

router.post('/', userCtrl.createUser)
// router.get('/',userCtrl.getAllCustomers)
// router.put('/:id',userCtrl.updateCustomer)
 router.delete('/:id',userCtrl.deleteUser)
 router.put('/:id',userCtrl.updateUser)
 router.get('/:id', userCtrl.getUserById)
 router.post('/auth', userCtrl.signin)
// router.get('/name/:id',userCtrl.getCustomerById)
// router.get('/:id',userCtrl.getLectureByCustomerId)
module.exports = router;