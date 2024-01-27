const express = require('express');
const bodyParser=require('body-parser');
const {connectDB} =require('./config/db');
const userRoutes= require('./routes/userRoutes');
const app = express();
const port = 3000;

connectDB(); //mongo db connection establishment call??????

app.use(express.json());
app.use(bodyParser.json());

app.use("/api/user",userRoutes);  //configured user routes..

app.get('/', (req, res) => {
    res.send('Welcome to ZeroZoner API !');
  });


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});



