const express  =  require('express');

const app = express();

require('dotenv').config();

const PORT = process.env.PORT || 4000;

app.listen(PORT, ()=> console.log(`server is started at PORT ${PORT}`));

const connect = require('./config/connection');

connect().then(()=> console.log('Mongo db is connected')).catch((err)=>{ 
    console.log('Error connecting to database:', err)
    process.exit(1);
});


