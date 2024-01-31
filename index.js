const express = require('express');
const {connectDB} =require('./config/db');
const userRoutes= require('./routes/userRoutes');
const authRoutes=require('./routes/authRoutes');
const projectRoutes=require('./routes/projectRoutes');
const {verifyJWT}=require('../middlewares/jwt');
const app = express();
const port = 3000;

connectDB(); //mongo db connection establishment call??????

app.use(express.json());

app.use("/api/user",userRoutes);  //configured user routes..
app.use("/api/auth",authRoutes);  //configured auth routes for signup and signIn
app.use('/api/project',verifyJWT,projectRoutes);  //configired project routes to manage the projects....

app.get('/', (req, res) => {
    res.send('Welcome to ZeroZoner API !');
  });


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});



