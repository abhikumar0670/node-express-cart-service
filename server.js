const express = require("express");
const app = express();
app.use(express.json());

// Hardcoded product list
const products = [
  { id: 1, name: "Bottle", price: 250 },
  { id: 2, name: "Bag", price: 500 },
  { id: 3, name: "Pen", price: 50 }
];

// GET /products
app.get("/products", (req, res) => {
  res.json(products);
});

// POST /cart
app.post("/cart", (req, res) => {
  const { productId, quantity } = req.body;
  const product = products.find(p => p.id === productId);

  if (!product) {
    return res.status(404).json({ error: "Product not found" });
  }
  if (!quantity || quantity <= 0) {
    return res.status(400).json({ error: "Invalid quantity" });
  }

  const total = product.price * quantity;
  res.json({ productId, quantity, total });
});

// Start server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
