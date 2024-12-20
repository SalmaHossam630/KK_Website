const mongoose = require('mongoose')
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