# The Daily Grind - Fun Fact API Server

This project adds a **"Fun Fact of the Day"** feature to *The Daily Grind* coffee shop. It provides a simple API that fetches a random fun fact from an external public API and serves it to a digital screen or front-end client.

##  Project Structure
fun-fact-server/
├── node_modules/
├── server.js
├── package.json
└── README.md

## Getting Started

### 1. Clone or Download the Project

bash
git clone <repository-url>
cd fun-fact-server

### 2. Install Dependencies
npm install

### 3. Start the Server
node server.js

You should see:

Server is running on port 3000
API Endpoint

GET /api/fun-fact
Fetches a random fun fact from an external API.

✅ Example Response:

{
  "fact": "Bananas are berries, but strawberries aren't."
}
❌ Error Response (e.g. external API fails):

{
  "error": "Could not fetch fun fact"
}
🔍 External API Used

Useless Facts API — no API key required.

## Built With

Node.js
Express.js
Axios
📌 Notes

The server runs on http://localhost:3000
Only the "text" field of the fact is returned to keep the response clean and simple.
