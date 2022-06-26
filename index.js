const express = require('express');
require('dotenv').config();
const db = require('./config/database');
const userRoutes = require('./routes/user.routes');
const authRoutes = require('./routes/auth.routes');

//const movieRoutes = require('./routes/movie.routes');
//const orderRoutes = require('./routes/order.routes');
const app = express();

//middleware
app.use(express.json());
const port = process.env.PORT || 3000;


//routes
app.use('/api', userRoutes);
app.use('/api', authRoutes);
//app.use('/api', movieRoutes);
//app.use('/api', orderRoutes);

app.get('/', (req, res) => {
    return res.send('Videoclub Pepa y Pepe');
});


app.get('*', (req, res) => {
    return res.status(404).send('404 route not found');
});

db()
    .then(() => {
        app.listen(port, () => {
            console.log('Server is running: ' + port);
        });
    })
    .catch((error) => {
        console.log("Error Connecting to mongoDB", error);
    });