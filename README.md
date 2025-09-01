# 🛍️ Node Express Cart API

A simple RESTful API for managing a shopping cart built with Node.js and Express.

## 🚀 Features

- REST API built with Express.js
- Hardcoded product catalog
- Basic cart functionality with total calculation
- Error handling for invalid product IDs or quantities

## 📦 Project Structure

```
node-express-cart/
├── package.json
├── server.js
└── README.md
```

## 🛠️ Setup Instructions

1. Clone the repository
   ```bash
   git clone https://github.com/abhikumar0670/node-express-cart.git
   cd node-express-cart
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Start the server
   ```bash
   npm start
   ```

The server will be running at: http://localhost:3000

## 📡 API Endpoints

### Get All Products
- **URL**: `/products`
- **Method**: `GET`
- **Response**: 
  ```json
  [
    { "id": 1, "name": "Bottle", "price": 250 },
    { "id": 2, "name": "Bag", "price": 500 },
    { "id": 3, "name": "Pen", "price": 50 }
  ]
  ```

### Add to Cart
- **URL**: `/cart`
- **Method**: `POST`
- **Headers**:
  - `Content-Type: application/json`
- **Request Body**:
  ```json
  {
    "productId": 2,
    "quantity": 3
  }
  ```
- **Success Response**:
  ```json
  {
    "productId": 2,
    "quantity": 3,
    "total": 1500
  }
  ```
- **Error Responses**:
  - `400 Bad Request`: When quantity is invalid
  - `404 Not Found`: When product ID doesn't exist

## 📦 Dependencies

- express: ^4.18.2

## 🛠️ Requirements

- Node.js >= 16
- npm >= 8

## 🚀 Example Usage

1. Start the server:
   ```bash
   npm start
   ```

2. Test the API endpoints:
   ```bash
   # Get all products
   curl http://localhost:3000/products
   
   # Add item to cart
   curl -X POST http://localhost:3000/cart \
     -H "Content-Type: application/json" \
     -d '{"productId":1,"quantity":2}'
   ```

## 📦 Dependencies

- express: ^4.18.2

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

Abhishek Kumar  
[GitHub Profile](https://github.com/abhikumar0670)