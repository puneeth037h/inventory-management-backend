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
  database: 'inventoryManagement1',
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

// Handle GET request to fetch products
app.get('/products', (req, res) => {
  // Construct a simple SELECT query to retrieve all data from the 'product' table
  let query = 'SELECT * FROM products ORDER BY productId';

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

// Handle GET request to fetch seller
app.get('/seller', (req, res) => {
  // Construct a simple SELECT query to retrieve all data from the 'product' table
  let query = 'SELECT * FROM seller ORDER BY sellerId';

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

// Handle GET request to fetch distributer
app.get('/distributer', (req, res) => {
  // Construct a simple SELECT query to retrieve all data from the 'product' table
  let query = 'SELECT * FROM distributer ORDER BY distributerId';

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

// Handle GET request to fetch customer
app.get('/customer', (req, res) => {
  // Construct a simple SELECT query to retrieve all data from the 'product' table
  let query = 'SELECT * FROM customer ORDER BY customerId';

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

// Handle GET request to fetch orders
app.get('/orders', (req, res) => {
  // Construct a simple SELECT query to retrieve all data from the 'product' table
  let query = 'SELECT o.orderId,c.customerName,p.productName,o.purchaseDate FROM orders AS o,customer AS c,products AS p WHERE o.productId=p.productId AND o.customerId=c.customerId ORDER BY o.orderId';

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

    //inserting new categorires
    app.post('/insertcategory', (req, res) => {
      const { categoryName,categoryId} = req.body;
    
      // Use parameterized query to prevent SQL injection
      let query =` INSERT INTO category (categoryName,categoryId) VALUES (?,?)`;
    
    
    
      db.query(query, [categoryName,categoryId], (err, results) => {
    
        if (err) {
          console.error('Error inserting data:', err);
          res.status(500).send('Internal Server Error');
          return;
        }
    
        console.log(results);
        // res.status(200).send('Data received and inserted into the database.');
    
      });
    });
    //inserting new seller
    app.post('/insertseller', (req, res) => {
      const { sellerId,sellerName,phone,address} = req.body;
    
      // Use parameterized query to prevent SQL injection
      let query =` INSERT INTO seller (sellerId,sellerName,phone,address) VALUES (?,?,?,?)`;
    
    
    
      db.query(query, [sellerId,sellerName,phone,address], (err, results) => {
    
        if (err) {
          console.error('Error inserting data:', err);
          res.status(500).send('Internal Server Error');
          return;
        }
    
        console.log(results);
        // res.status(200).send('Data received and inserted into the database.');
    
      });
    });

    //inserting new distributer
    app.post('/insertdistributer', (req, res) => {
      const {distributerId,distributerName,phone,address} = req.body;
    
      // Use parameterized query to prevent SQL injection
      let query =` INSERT INTO distributer (distributerId,distributerName,phone,address) VALUES (?,?,?,?)`;
    
    
    
      db.query(query, [distributerId,distributerName,phone,address], (err, results) => {
    
        if (err) {
          console.error('Error inserting data:', err);
          res.status(500).send('Internal Server Error');
          return;
        }
    
        console.log(results);
        // res.status(200).send('Data received and inserted into the database.');
    
      });
    });

//inserting new customer
app.post('/insertcustomer', (req, res) => {
  const {customerId,customerName,phone,address} = req.body;

  // Use parameterized query to prevent SQL injection
  let query =` INSERT INTO customer (customerId,customerName,phone,address) VALUES (?,?,?,?)`;



  db.query(query, [customerId,customerName,phone,address], (err, results) => {

    if (err) {
      console.error('Error inserting data:', err);
      res.status(500).send('Internal Server Error');
      return;
    }

    console.log(results);
    // res.status(200).send('Data received and inserted into the database.');

  });
});

//inserting new product
app.post('/insertproduct', (req, res) => {
  const {productId,productName,categoryId,sellerId,distributerId,description,noOfProducts,price} = req.body;

  // Use parameterized query to prevent SQL injection
  let query =` INSERT INTO products (productId,productName,categoryId,sellerId,distributerId,description,noOfProducts,price) VALUES (?,?,?,?,?,?,?,?)`;



  db.query(query, [productId,productName,categoryId,sellerId,distributerId,description,noOfProducts,price], (err, results) => {

    if (err) {
      console.error('Error inserting data:', err);
      res.status(500).send('Internal Server Error');
      return;
    }

    console.log(results);
    // res.status(200).send('Data received and inserted into the database.');

  });
});

//inserting new orders
app.post('/insertorder', (req, res) => {
  const {orderId,productId,customerId,purchaseDate} = req.body;

  // Use parameterized query to prevent SQL injection
  let query =` INSERT INTO orders (orderId,productId,customerId,purchaseDate) VALUES (?,?,?,?)`;



  db.query(query, [orderId,productId,customerId,purchaseDate], (err, results) => {

    if (err) {
      console.error('Error inserting data:', err);
      res.status(500).send('Internal Server Error');
      return;
    }

    console.log(results);
    // res.status(200).send('Data received and inserted into the database.');

  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
