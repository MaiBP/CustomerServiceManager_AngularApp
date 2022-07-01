const { Router } = require ('express')
const router = Router();

const customersController = require('../controllers/customers.controllers')


router.get('/',customersController.getAllCustomers)
router.post('/',customersController.createCustomer)
router.get('/:id',customersController.getOneCustomer)
router.put('/:id',customersController.editCustomer)
router.delete('/:id',customersController.deleteCustomer)

module.exports = router;