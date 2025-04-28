import express from 'express';
import fetch from 'node-fetch';

// Create an instance of express
const app = express();

// Middleware to parse JSON
app.use(express.json()); 

// First GET endpoint
app.get('/', (req, res) => {
  res.send('Hello from backend to frontend!');
});

// First POST endpoint
app.post('/weather', (req, res) => {
  const cityName = req.body.cityName; 
  console.log('Received city name:', cityName);
  res.send(`You sent: ${cityName}`);
});

// Start the server
   const PORT = process.env.PORT || 3000;  
   app.listen(PORT, () => {
   console.log(`Server is running on http://localhost:${PORT}`);
});