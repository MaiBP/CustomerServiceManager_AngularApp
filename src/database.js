const mongoose = require('mongoose')


mongoose
.connect('mongodb://localhost/main-customers', {
    useUnifiedTopology: true,
    useNewUrlParser: true
})
.then((db)=> console.log('db connected'))
.catch((err) => console.log(err))