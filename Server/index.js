const express = require('express')
const jwt = require('jsonwebtoken')
const app = express();
const db = require('./config/db')
const PORT = process.env.PORT;
const userRouter = require('./routes/user')

app.use(express.json());

// app.use('/',userRouter);
// app.use('/',(req, res) => {
//     res.json({
//         home: "Home page"
//     })
// })

app.listen(PORT,()=> console.log('server is runing on http://localhost:3001'))