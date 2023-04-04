const { connect } = require ('mongoose')
const { MONGODB_URI } = require('./config')

connect(MONGODB_URI)
.then(() => console.log('se conecto la base de datos'))
.catch((err) => console.log(err))