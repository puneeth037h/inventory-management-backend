const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
const port = 3000;

// Enable CORS for all routes
app.use(cors());

// MySQL Connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'inventory',
});
db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
  } else {
    console.log('Connected to MySQL');
  }
});

// Express Middleware
app.use(express.json());

// Handle GET request to fetch categories
app.get('/categories', (req, res) => {
  // Construct a simple SELECT query to retrieve all data from the 'category' table
  let query = 'SELECT * FROM category ORDER BY categoryId';

  // Log the SQL query for debugging purposes
  console.log(query);

  // Execute the database query
  db.query(query, (err, results) => {
    if (err) {
      // Handle database error
      res.status(500).send('Internal Server Error');
      return;
    }

    // Log the results to the console for debugging
    console.log(results);

    // Send the results as a JSON response to the client
    res.json(results);
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
