const express = require('express');
const cors = require('cors');
const app = express();
const port = 8000;

// Enable CORS
app.use(cors());

// Middleware for parsing JSON
app.use(express.json());

// Sample data (simulating a database)
let products = [
  { id: 1, name: 'Thread', stock: 100 },
  { id: 2, name: 'Fabric', stock: 50 },
];

// Example routes
app.get('/api/products', (req, res) => {
  console.log("LLEGO")
  res.json(products);
});

app.post('/api/products', (req, res) => {
  const newItem = req.body;
  products.push(newItem);
  res.status(201).json(newItem);
});

app.put('/api/products/:id', (req, res) => {
  const itemId = parseInt(req.params.id);
  const updatedItem = req.body;

  for (let i = 0; i < products.length; i++) {
    if (products[i].id === itemId) {
      products[i] = updatedItem;
      return res.json(updatedItem);
    }
  }

  res.status(404).json({ error: 'Item not found' });
});

app.delete('/api/products/:id', (req, res) => {
  const itemId = parseInt(req.params.id);
  products = products.filter(item => item.id !== itemId);
  res.sendStatus(204);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
