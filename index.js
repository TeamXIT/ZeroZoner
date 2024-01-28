const express = require('express');
const {connectDB} =require('./config/db');
const userRoutes= require('./routes/userRoutes');
const authRoutes=require('./routes/authRoutes');
const app = express();
const port = 3000;

connectDB(); //mongo db connection establishment call??????

app.use(express.json());

app.use("/api/user",userRoutes);  //configured user routes..
app.use("/api/auth",authRoutes);  //configured auth routes for signup and signIn

app.get('/', (req, res) => {
    res.send('Welcome to ZeroZoner API !');
  });


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});



