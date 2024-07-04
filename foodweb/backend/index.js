const express = require('express')
const app = express()
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const port=5000;
const connectToMongoDB=require('./database');

connectToMongoDB();
app.get('/', (req, res) => {
  res.send('hello world')
})
app.use((req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin","http://localhost:3000"),
    res.header(
        "Access-Control-Allow-Headers",
        "Origin,X-Requested-With,Content-Type,Accept"

    );
    next();
})

app.use("/api",require("./routes/createuser"));
app.use("/api",require("./routes/Displaydata"));
app.use("/api",require("./routes/Orderdata"));
app.use("/api",require("./routes/Orderdata"));
app.use("/api",require("./routes/DisplayFavourite"));
app.listen(port,()=>{
    console.log(`backend is running on port ${port}`);
})