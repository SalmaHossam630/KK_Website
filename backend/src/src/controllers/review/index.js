const express = require("express")
const Review = require('../../models/review')
const mongoose = require('mongoose')
// const mongouri = "mongodb://localhost:27017/lab1db"
// app service 
const app = express()
// this is to body
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.post('/reviews', async (req, res) => {
  const { productId, userId, rating, comment } = req.body;

  try {
    const newReview = new Review({
      product: productId,
      user: userId,
      rating,
      comment,
    });
    await newReview.save();
    res.status(201).json(newReview);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to create review' });
  }
});
mongoose.set("strictQuery", false)
mongoose
.connect('mongodb+srv://salmamedhat570:imdxCp2NJ5V4ueXJ@cluster0.t74qs.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
.then(() => {
    console.log('connected to MongoDB')
    //listen on specific port 
    app.listen(8000, () => console.log('app started on port 8000'))
}).catch((error) => {
    console.log('cant connect to mongodb'+error)
})