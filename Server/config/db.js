const db = require('mongoose')
const env = require('dotenv').config()

db.connect(process.env.DB_URL)
.then(()=> console.log("DB Connected..."))
.catch(err => console.log(err))

