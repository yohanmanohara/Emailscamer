require('dotenv').config()
const cors = require('cors');
const express = require('express')
const mongoose = require('mongoose')
const userRoutes = require('./routers/user');
mongoose.set('strictQuery', true);
const app = express()
app.use(cors()); 
app.use(express.json())



app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

app.use('/api/user', userRoutes);



mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log('Mono db scussefully & listening on port', process.env.PORT)
    })
  })
  .catch((error) => {
    console.log(error)
  })


  console.log("Server is running on port 5000");