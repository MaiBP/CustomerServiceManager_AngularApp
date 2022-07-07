
const {Schema, model} = require('mongoose')

const customerSchema = new Schema({
    name:{type: String, required: true},
    lastName:{type: String, required: true},
    phoneNumber:{type: Number, required: true},
    email:{type: String, required: false},
    inquiry: {type: String, required: true}
},
{
    timestamps: true,
    verionKey: false
})

module.exports = model('Customer', customerSchema);