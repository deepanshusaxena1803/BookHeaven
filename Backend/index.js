import express from "express"
import 'dotenv/config'
import mongoose from "mongoose";
import cors from "cors"

import bookRoute from "./route/book.route.js"
import userRoute from "./route/user.route.js"

const app = express()

app.use(cors());                                   //CORS is used to manage cross-origin requests.
app.use(express.json());                          //By using this, data coming from body will get converted into json

const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDBURI;

// app.get('/', (req, res) => {
//   res.send('Heya!')
// })

//Connecting to MongoDB
try {
    mongoose.connect(URI,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");
} catch (error) {
    console.log("Error: ",error);
}


//defining routes
app.use("/book",bookRoute);
app.use("/user",userRoute);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
}) 
