//imports
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('./util/database.util');
const cartRoute = require('./Routes/cartRoutes');
const app = express();


app.get('/', (req, res) => {
    res.send('<h1>#Zoys Gonek#</h1>');
})

//enable cors sds
app.use(cors());
app.use(bodyParser.json());

//set routing
app.use('/api/v1/cart', cartRoute);

//run the server
app.listen(3000, ()=>{
    console.log("Server running at port 3000");
});


