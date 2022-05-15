//imports
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('./util/database.util');
const cartRoute = require('./Routes/cartRoutes');
const app = express();


app.get('/', (req, res) => {
    res.send('<h1>welcome</h1>');
})

//enable cors
app.use(cors());
app.use(bodyParser.json());

//set routing
app.use('/cart', cartRoute);

//run the server
app.listen(3000, ()=>{
    console.log("Server running at port 3000");
});


