const express = require('express');
const mongoose = require('mongoose');
const Review = require('./models/review'); 

const app = express();

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

app.get('/products/:productId/reviews', async (req, res) => {
  try {
    const reviews = await Review.find({ product: req.params.productId });
    res.json(reviews);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to fetch reviews' });
  }
});

mongoose.set("strictQuery", false)
mongoose
// .connect('')
.then(() => {
    console.log('connected to MongoDB')
    //listen on specific port 
    app.listen(8000, () => console.log('app started on port 8000'))
}).catch((error) => {
    console.log('cant connect to mongodb'+error)
})