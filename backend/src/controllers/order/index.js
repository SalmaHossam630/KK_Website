const express = require('express');
const mongoose = require('mongoose');
const Order = require('../../models/order'); 

const app = express();

// app.post('/order', async (req, res) => {
//   const { userId, items, totalPrice } = req.body;

//   const newOrder = new Order({
//     userId,
//     items,
//     totalPrice,
//     status: "Pending",
//   });

//   try {
//     await newOrder.save();
//     res.status(201).json(newOrder);
//   } catch (err) {
//     res.status(500).json({ message: "Error creating order" });
//   }

// });


app.use(express.json())
app.use(express.urlencoded({extended: false}))


app.get('/', (req, res) => {
    res.send('Hello World, from cs309');
});

// return all orders 
app.get('/orders', async (req, res) => {
    try {
        const orders = await Order.find({});
        res.status(200).json(orders);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
});

// return order by user Id
app.get('/order/:userId', async (req, res) => {
    
    try {
        // req userId
        const userId = req.params.userId;
        // res.send(the number: ${id})
        // find by userId in order 
        const order = await Order.findById(userId);
        res.status(200).json(order);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
});

// delete order by userId
app.delete('/order/:userId', async (req, res) => {

    // req userId
    const userId = req.params.userId;
    // delete by userId in orders 
   
    try {
        const {userId} = req.params;
        const order = await Order.findByIdAndDelete(userId);
        if(!order){
            return res.status(404).json({message: `cannot find any order with user ID ${id}`})
        }
        res.status(200).json(order);
        
      }
    catch (error) {
        res.status(500).json({message: error.message})
    }
  });


// create a new order
app.post('/newOrder',  async (req, res) => {

    try{
//         // get order object from body 
        const { userId, items, totalPrice }  = req.body;
//         const existingOrder = await order.findOne({ userId });
        
// //         // validate
// //         if (existigOrder) {
// //             res.status(400).send( 'order already exist');
// //         }  
        const newOrder = new Order({
            userId,
            items,
            totalPrice
        });

        // save order
        await newOrder.save();
        res.status(201).send('Order createrd successfully'); 

    }
    catch(err)
    {
        res.status(500).send('server error: '+ err);
    }
    
});

app.put('/updateOrder',  async (req, res) => {

    try{
        const { userId } = req.params;
        const { status } = req.body;

        const updatedOrder = await Order.findByIdAndUpdate(
            userId,
            { status },
            { new: true }
        );
        
        if(!updatedOrder){
            return res.status(404).json({message: `cannot find any order with user ID ${userId}`})
        }

        res.status(200).json({message: `order updated successfully`});
    }catch(err)
    {
        res.status(500).send('server error: '+ err);
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

