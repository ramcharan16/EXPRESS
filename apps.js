const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const adminRoutes = require('./routes/admin'); // Relative path to admin.js
const shopRoutes = require('./routes/shop'); // Relative path to shops.js

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/admin',adminRoutes);
app.use(shopRoutes)
app.use((req,res,next)=>{
    res.status(404).send('<h1>Page not found</h1>');

});


const PORT = 5000; // Change the port number here

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
