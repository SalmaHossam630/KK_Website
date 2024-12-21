const express = require("express")
const mongoose = require('mongoose')
const Product = require('../../models/product.js')

// const mongouri = "mongodb://localhost:27017/lab1db"
// app service 
const app = express()
// this is to body
app.use(express.json())
app.use(express.urlencoded({extended: false}))


app.get('/', (req, res) => {
    res.send('Hello World, from cs309');
});
 
app.get('/product', async (req, res) => {
    try {
        const products = await Product.find({});
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
});

//let productParam = req.body;
        // if (await Product.findOne({ name: productParam.name })) {
        //     res.send( 'name "' + productParam.email + '" is already exist');
        // }

app.post('/products', async (req, res) => {
        try{
        const product = new Product(req.body);
        await product.save();
        res.status(200).json({message:"product added successfully"})
       } 
        catch (error){
            res.status(500).json({message: error.message});
        }
    
});

// app.post('/products', async (req, res) => {
//     try {
//       const products = req.body; // Assuming req.body is an array of product objects
  
//       for (const productData of products) {
//         const product = new Product(productData);
//         await product.save();
//       }
  
//       res.status(200).json({ message: "Products added successfully" });
//     } catch (error) {
//       res.status(500).json({ message: error.message });
//     }
//   });

app.delete('/products/:id', async (req, res) => {
    // const id = req.params.id;
    try{
    const {id} = req.params;
    const product =await Product.findByIdAndDelete(id);

   // res.json({ message: 'Product deleted' });
    if(!product){
        return res.status(404).json({message: `cannot find any product with ID ${id}`})
    }
    res.status(200).json({ message: 'Product deleted' });
    }
    catch (error) {
        res.status(500).json({message: error.message})
    }
});
app.put('/products/:id', async (req, res) => {

    try{
    const {id} = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body, { new: true });
    res.status(200).json({ message: 'Product updated successfully',product });;
    }
    catch (error) {
        res.status(500).json({message: error.message})
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