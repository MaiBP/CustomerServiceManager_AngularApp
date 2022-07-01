const customerController = {}

const Customer = require('../models/Customer')

customerController.getAllCustomers = async (req, res) => {
    const customers = await Customer.find()
    res.json(customers)
    // res.send('customers')
}
customerController.createCustomer = (req, res) => {
    console.log(req.body)
    const newCustomer = new Customer(req.body)
    res.send('created customer')
}


customerController.getOneCustomer = (req, res) => {
   
    res.send('get customers')
}

customerController.editCustomer = (req, res) => {}
customerController.deleteCustomer = (req, res) => {}

module.exports = customerController;