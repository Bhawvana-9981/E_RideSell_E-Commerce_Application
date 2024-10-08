import dotenv from 'dotenv';
import express from 'express';
import connectDB from './config/db.js';
import productRoutes from './routes/productRoutes.js';
// import products from './data/products.js';
dotenv.config();
const port = process.env.PORT || 5000;

connectDB;

const app = express();


app.get('/', (req, res) => {
    res.send('API is running...');

});

app.use('/api/products', productRoutes);

// app.get('/api/products', (req, res) => {
//     res.json(products);
// })

// app.get('/api/products/:id', (req, res) => {
//     const product = products.find((p) => p._id === req.params.id);
//     res.json(product);
// })

app.listen(port, () => console.log(`Server running on port ${port}`))