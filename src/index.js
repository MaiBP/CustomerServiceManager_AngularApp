require('./database')
const app = require ('./app')

app.listen(app.get('port'));
console.log('listening to port', app.get('port'))