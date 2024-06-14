const express = require("express");
const userRoutes =require("./routes/user");
const mongoose = require("mongoose");
require('dotenv').config();
 
const port = process.env.PORT_NO;
mongoose.connect(process.env.MONGO_URI)
.then(()=> console.log("Database connected Succesfully"))
.catch((err)=> console.log(`Error in DB connection ${err}`));


const app = express();
app.use(express.json());
app.use("/api/v1/user",userRoutes);
app.use("/*", (req,res)=>{
    res.json({
        message: "path not found"
  });
})

app.listen(port, ()=>(console.log("Server is running at port 10000 ")))


