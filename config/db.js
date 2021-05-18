const mdb = process.env.MDB
const user = process.env.DB_USERNAME
const password = process.env.DB_PASSWORD
const mongoURI = mdb.replace("<user>", user).replace("<password>", password)

module.exports = { mongoURI }
