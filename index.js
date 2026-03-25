const express  =  require('express');

const app = express();

require('dotenv').config();

const PORT = process.env.PORT || 4000;

app.listen(PORT, ()=> console.log(`server is started at PORT ${PORT}`));

const connect = require('./config/connection');

app.use(express.json());

// Create post 

const route = require('./routes/posts');

app.use('/posts',route);

connect().then(()=> console.log('Mongo db is connected')).catch((err)=>{ 
    console.log('Error connecting to database:', err)
    process.exit(1);
});


