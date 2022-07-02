const customerController = {}

const Customer = require('../models/Customer')

customerController.getAllCustomers = async (req, res) => {
    const customers = await Customer.find()
    res.json(customers)
    // res.send('customers')
}
customerController.createCustomer =  async (req, res) => {
    
    const newCustomer = new Customer(req.body)
    console.log(newCustomer)
    await newCustomer.save()
    res.send({message: 'Customer created'})
}


customerController.getOneCustomer = async (req, res) => {
    // console.log(req.params)
    const customer = await Customer.findById(req.params.id)
    res.send(customer)
}

customerController.editCustomer = async (req, res) => {
  await Customer.findByIdAndUpdate(req.params.id, req.body)
  res.json({status: "Customer Updated"})
}
customerController.deleteCustomer = async (req, res) => {
    await Customer.findByIdAndDelete(req.params.id)
    res.json({status: 'Customer Deleted'})
     
}

module.exports = customerController;