📦 Node Express Cart Service
A simple Node.js + Express service with two APIs:

GET /products → Returns a hardcoded list of products

POST /cart → Accepts a product ID and quantity, then returns the total price

🚀 Features
✅ REST API built with Express.js
✅ Hardcoded product catalog
✅ Basic cart functionality with total calculation
✅ Error handling for invalid product IDs or quantities

📂 Project Structure
node-express-cart-service/  
├── package.json  
├── server.js  
└── README.md  
⚙️ Setup Instructions
1️⃣ Clone the repository
git clone https://github.com/abhikumar0670/node-express-cart-service.git
cd node-express-cart-service
2️⃣ Install dependencies
npm install
3️⃣ Start the server
npm start
🖥️ By default, the server runs on: http://localhost:3000

📡 API Endpoints
🔹 Get Products
Request:

GET /products
Response:

[
  { "id": 1, "name": "Bottle", "price": 250 },
  { "id": 2, "name": "Bag", "price": 500 },
  { "id": 3, "name": "Pen", "price": 50 }
]
🔹 Add to Cart
Request:

POST /cart
Content-Type: application/json
Body:

{ "productId": 2, "quantity": 3 }
Response:

{ "productId": 2, "quantity": 3, "total": 1500 }
🛠️ Requirements
Node.js >= 16

npm >= 8

✅ Example Run
Start the server

npm start
Test with curl

curl http://localhost:3000/products
curl -X POST http://localhost:3000/cart \
-H "Content-Type: application/json" \
-d '{"productId":1,"quantity":2}'
👨‍💻 Author
Abhishek Kumar
🔗 GitHub Profile