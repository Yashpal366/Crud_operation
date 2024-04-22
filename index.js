import express from "express";
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import route from "./routes/userRoute.js";

const app = express();
app.use(bodyParser.json());
const port ="4444";

mongoose.connect("mongodb+srv://"username":"password"@cluster0.ctozy2t.mongodb.net/"databasename").then(()=>{
console.log("DB connected ")
}).catch(error=>{
    console.log("Db Error:", error)
})

app.listen(port,()=>{
    console.log("App is listening on port:", port)
})

app.use("/", route)
