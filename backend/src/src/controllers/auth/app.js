const express = require("express")
const User = require('../../models/user')
const bcrypt =require("bcrypt")
const mongoose = require('mongoose')
// const mongouri = "mongodb://localhost:27017/lab1db"
// app service 
const app = express()
// this is to body
app.use(express.json())
app.use(express.urlencoded({extended: false}))


app.get('/', (req, res) => {
    res.send('Hello World, from cs309');
});

app.get('/user', async (req, res) => {
    // res.send(`age: ${req.query.age}`)
    res.send("<h1>Heloo</h1>")
    // res.sendFile(__dirname + "/firstproject/index.html")

    // res.json({
    //     Name: req.body.fullName,
    //     Age:req.query.age
    // })
});

app.get('/users', async (req, res) => {
    try {
        const users = await User.find({});
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
});

app.get('/user/:id', async (req, res) => {
    
    try {
        // req id 
        const id = req.params.id;
        // res.send(`the number: ${id}`)
        // find by id in users 
        const user = await User.findById(id);
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
});

// Assignment => write route to get user by email ????


app.delete('/user/:id', async (req, res) => {

    // req id 
    const id = req.params.id;
    // delet by id in users 
   
    try {
        const {id} = req.params;
        const user = await User.findByIdAndDelete(id);
        if(!user){
            return res.status(404).json({message: `cannot find any user with ID ${id}`})
        }
        res.status(200).json(user);
        
    } catch (error) {
        res.status(500).json({message: error.message})
    }
});

app.post('/register',  async (req, res) => {

    try{
        //get user object from body 
        const { username, email, password }  = req.body;
        const existingUser = await User.findOne({ email });
        // validate
        if (existingUser) {
            res.status(400).send( 'email  is already exist');
        }
        //hash password before saving user to database ??????????  
        const salt =await bcrypt.genSalt(10);
        const hashedPassword =await bcrypt.hash(password,salt);
        const newUser = new User({
            email,
            password: hashedPassword,
            username
          });
        // save user
        await newUser.save();
        res.status(201).send('User registered successfully'); 

    }catch(err)
    {
        res.status(500).send('server error: '+ err);
    }
    
});

app.post('/login',  async (req, res) => {

    try{
        //get user object from body 
        const { email, password,username}  = req.body;

        const existingUser = await User.findOne({ email });
        // validate
        if (!existingUser) {
          res.status(400).send( 'Invalid email or password');
        }

        const isMatch = await bcrypt.compare(password, existingUser.password); // Compare hashed passwords
        if(isMatch) {
            res.status(200).send("user logged in successfully");
        }
        else{
            res.status(400).send( 'Invalid emails or password');
        }
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