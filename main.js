const express = require('express');
let router = require('./routers/userRouter');
let cors = require('cors');

let app = express();
app.use(express.json())
app.use(cors());
require('./config/database');
app.use('/api/user', router);
app.listen(8000);
console.log("Server is Running!");