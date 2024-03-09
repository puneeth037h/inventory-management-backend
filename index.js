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

//get category number
app.get('/categorynumber', (req, res) => {
  // Construct a simple SELECT query to retrieve all data from the 'category' table
  let query = 'SELECT COUNT(*) AS noOfCategories FROM category';

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
//get customer number
app.get('/customernumber', (req, res) => {

  let query = 'SELECT COUNT(*) AS noOfCustomer FROM customer';

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
//get product number
app.get('/productnumber', (req, res) => {
  
  let query = 'SELECT COUNT(*) AS noOfProducts FROM products';

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
//get orders number
app.get('/ordernumber', (req, res) => {
  
  let query = 'SELECT COUNT(*) AS noOforders FROM orders';

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
//search
app.post('/search', (req, res) => {
  // Assuming productName is coming from the client-side
  const { searchTerm } = req.body;

  // Use parameterized query with LIKE operator for partial matches
  let query = `SELECT * FROM products WHERE productName LIKE ? OR productId LIKE ? ORDER BY productName`;

  // Append '%' wildcards to allow for partial matches before and after productName
  db.query(query, [`${searchTerm}%`,`%${searchTerm}%`], (err, results) => {
    if (err) {
      console.error('Error fetching data:', err);
      res.status(500).send('Internal Server Error');
      return;
    }

    console.log(results);
    res.json(results); // Send the results back to the client
  });
});
//search categories
app.post('/searchcatgories', (req, res) => {
  // Assuming productName is coming from the client-side
  const { searchTerm } = req.body;

  // Use parameterized query with LIKE operator for partial matches
  let query = `SELECT * FROM category WHERE categoryName LIKE ? OR categoryId LIKE ? ORDER BY categoryName`;

  // Append '%' wildcards to allow for partial matches before and after productName
  db.query(query, [`${searchTerm}%`,`%${searchTerm}%`], (err, results) => {
    if (err) {
      console.error('Error fetching data:', err);
      res.status(500).send('Internal Server Error');
      return;
    }

    console.log(results);
    res.json(results); // Send the results back to the client
  });
});

//search seller
app.post('/searchseller', (req, res) => {
  // Assuming productName is coming from the client-side
  const { searchTerm } = req.body;

  // Use parameterized query with LIKE operator for partial matches
  let query = `SELECT * FROM seller WHERE sellerName LIKE ? OR sellerId LIKE ? ORDER BY sellerName`;

  // Append '%' wildcards to allow for partial matches before and after productName
  db.query(query, [`${searchTerm}%`,`%${searchTerm}%`], (err, results) => {
    if (err) {
      console.error('Error fetching data:', err);
      res.status(500).send('Internal Server Error');
      return;
    }

    console.log(results);
    res.json(results); // Send the results back to the client
  });
});

//search customer
app.post('/searchcustomer', (req, res) => {
  // Assuming productName is coming from the client-side
  const { searchTerm } = req.body;

  // Use parameterized query with LIKE operator for partial matches
  let query = `SELECT * FROM customer WHERE customerName LIKE ? OR customerId LIKE ? ORDER BY customerName`;

  // Append '%' wildcards to allow for partial matches before and after productName
  db.query(query, [`${searchTerm}%`,`%${searchTerm}%`], (err, results) => {
    if (err) {
      console.error('Error fetching data:', err);
      res.status(500).send('Internal Server Error');
      return;
    }

    console.log(results);
    res.json(results); // Send the results back to the client
  });
});

//search orders
app.post('/searchorders', (req, res) => {
  // Assuming productName is coming from the client-side
  const { searchTerm } = req.body;

  // Use parameterized query with LIKE operator for partial matches
  let query = `SELECT o.orderId,c.customerName,p.productName,o.purchaseDate FROM orders AS o,customer AS c,products AS p  WHERE (o.orderId LIKE ? OR p.productId LIKE ? OR c.customerId LIKE ?) AND o.productId=p.productId AND o.customerId=c.customerId ORDER BY o.orderId;`;

  // Append '%' wildcards to allow for partial matches before and after productName
  db.query(query, [`${searchTerm}%`,`%${searchTerm}%`,`${searchTerm}%`], (err, results) => {
    if (err) {
      console.error('Error fetching data:', err);
      res.status(500).send('Internal Server Error');
      return;
    }

    console.log(results);
    res.json(results); // Send the results back to the client
  });
});

//search distributer
app.post('/searchdistributer', (req, res) => {
  // Assuming productName is coming from the client-side
  const { searchTerm } = req.body;

  // Use parameterized query with LIKE operator for partial matches
  let query = `SELECT * FROM distributer WHERE distributerName LIKE ? OR distributerId LIKE ?  ORDER BY distributerName`;

  // Append '%' wildcards to allow for partial matches before and after productName
  db.query(query, [`${searchTerm}%`,`%${searchTerm}%`], (err, results) => {
    if (err) {
      console.error('Error fetching data:', err);
      res.status(500).send('Internal Server Error');
      return;
    }

    console.log(results);
    res.json(results); // Send the results back to the client
  });
});


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

//updating the categories
app.post('/updatecategory', (req, res) => {
  const { categoryName, categoryId } = req.body;

  // Use parameterized query to prevent SQL injection
  let query = `UPDATE category 
               SET categoryName=? 
               WHERE categoryId=?`;

  db.query(query, [categoryName, categoryId], (err, results) => {
    if (err) {
      console.error('Error updating data:', err);
      res.status(500).send('Internal Server Error');
      return;
    }

    console.log(results);
    if (results.affectedRows === 0) {
      res.status(404).send('Category not found.');
    } else {
      res.status(200).send('Category updated successfully.');
    }
  });
});


app.post('/deletecategory', (req, res) => {
  const { categoryId } = req.body;

  // Check if categoryId is provided
  if (!categoryId) {
    return res.status(400).send('categoryId is required.');
  }

  const query = `DELETE FROM category WHERE categoryId = ?`;

  db.query(query, [categoryId], (err, results) => {
    if (err) {
      console.error('Error deleting data:', err);
      return res.status(500).send('Internal Server Error');
    }

    // Check if the category was found and deleted
    if (results.affectedRows === 0) {
      return res.status(404).send('Category not found.');
    } else {
      res.status(200).send('Category deleted successfully.');
    }
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

//updating seller
app.post('/updateseller', (req, res) => {
  const { sellerId, sellerName, phone, address } = req.body;

  // Use parameterized query to prevent SQL injection
  const query = `
    UPDATE seller
    SET sellerName = ?, phone = ?, address = ?
    WHERE sellerId = ?;
  `;

  db.query(query, [sellerName, phone, address, sellerId], (err, results) => {
    if (err) {
      console.error('Error updating data:', err);
      res.status(500).send('Internal Server Error');
      return;
    }

    // If no records are affected, it means the sellerId doesn't exist
    if (results.affectedRows === 0) {
      return res.status(404).send('Seller not found');
    }

    console.log('Update results:', results);
    res.status(200).send('Seller updated successfully');
  });
});

//delete seller
app.post('/deleteseller', (req, res) => {
  const { sellerId } = req.body;

  // Check if categoryId is provided
  if (!sellerId) {
    return res.status(400).send('sellerId is required.');
  }

  const query = `DELETE FROM seller WHERE sellerId = ?`;

  db.query(query, [sellerId], (err, results) => {
    if (err) {
      console.error('Error deleting data:', err);
      return res.status(500).send('Internal Server Error');
    }

    // Check if the category was found and deleted
    if (results.affectedRows === 0) {
      return res.status(404).send('seller not found.');
    } else {
      res.status(200).send('seller deleted successfully.');
    }
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

//updating distributer
app.post('/updatedistributer', (req, res) => {
  const { distributerId, distributerName, phone, address } = req.body;

  // Check if all required fields are provided
  if (!distributerId || !distributerName || !phone || !address) {
    return res.status(400).send('All fields (distributerId, distributerName, phone, address) are required.');
  }

  const query = `UPDATE distributer SET distributerName = ?, phone = ?, address = ? WHERE distributerId = ?`;

  db.query(query, [distributerName, phone, address, distributerId], (err, results) => {
    if (err) {
      console.error('Error updating data:', err);
      return res.status(500).send('Internal Server Error');
    }

    // Check if the distributor was found and updated
    if (results.affectedRows === 0) {
      return res.status(404).send('Distributor not found.');
    } else {
      res.status(200).send('Distributor updated successfully.');
    }
  });
});
//deleting distributer
app.post('/deletedistributer', (req, res) => {
  const { distributerId } = req.body;

  // Check if categoryId is provided
  if (!distributerId) {
    return res.status(400).send('distributerId is required.');
  }

  const query = `DELETE FROM distributer WHERE distributerId = ?`;

  db.query(query, [distributerId], (err, results) => {
    if (err) {
      console.error('Error deleting data:', err);
      return res.status(500).send('Internal Server Error');
    }

    // Check if the category was found and deleted
    if (results.affectedRows === 0) {
      return res.status(404).send('distributer not found.');
    } else {
      res.status(200).send('distributer deleted successfully.');
    }
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

//update customer
app.post('/updatecustomer', (req, res) => {
  const { customerId, customerName, phone, address } = req.body;

  const query = `UPDATE customer SET customerName = ?, phone = ?, address = ? WHERE customerId = ?`;

  db.query(query, [customerName, phone, address, customerId], (err, results) => {
    if (err) {
      console.error('Error updating data:', err);
      return res.status(500).send('Internal Server Error');
    }

    // Check if the customer was found and updated
    if (results.affectedRows === 0) {
      return res.status(404).send('Customer not found.');
    } else {
      res.status(200).send('Customer updated successfully.');
    }
  });
});

//delete customer
app.post('/deletecustomer', (req, res) => {
  const { customerId } = req.body;

  // Check if customerId is provided
  if (!customerId) {
      return res.status(400).send('customerId is required.');
  }

  const query = `DELETE FROM Customer WHERE customerId = ?`;

  db.query(query, [customerId], (err, results) => {
      if (err) {
          console.error('Error deleting customer:', err);
          return res.status(500).send('Internal Server Error');
      }

      // Check if the customer was found and deleted
      if (results.affectedRows === 0) {
          return res.status(404).send('Customer not found.');
      } else {
          res.status(200).send('Customer deleted successfully.');
      }
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

//updating the products
app.post('/updateproduct', (req, res) => {
  const { productId, productName, categoryId, sellerId, distributerId, description, noOfProducts, price } = req.body;

  // Use parameterized query to prevent SQL injection
  let query = `UPDATE products 
               SET productName=?, categoryId=?, sellerId=?, distributerId=?, description=?, noOfProducts=?, price=? 
               WHERE productId=?`;

  db.query(query, [productName, categoryId, sellerId, distributerId, description, noOfProducts, price, productId], (err, results) => {
    if (err) {
      console.error('Error updating data:', err);
      res.status(500).send('Internal Server Error');
      return;
    }

    console.log(results);
    if (results.affectedRows === 0) {
      res.status(404).send('Product not found.');
    } else {
      res.status(200).send('Product updated successfully.');
    }
  });
});
//deleting product
app.post('/deleteproducts', (req, res) => {
  const { productId } = req.body;

  // Check if categoryId is provided
  if (!productId) {
    return res.status(400).send('productId is required.');
  }

  const query = `DELETE FROM products WHERE productId = ?`;

  db.query(query, [productId], (err, results) => {
    if (err) {
      console.error('Error deleting data:', err);
      return res.status(500).send('Internal Server Error');
    }

    // Check if the category was found and deleted
    if (results.affectedRows === 0) {
      return res.status(404).send('products not found.');
    } else {
      res.status(200).send('products deleted successfully.');
    }
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

//update orders
app.post('/updateorder', (req, res) => {
  const { orderId, productId, customerId, purchaseDate } = req.body;

  const query = `UPDATE orders SET productId = ?, customerId = ?, purchaseDate = ? WHERE orderId = ?`;

  db.query(query, [productId, customerId, purchaseDate, orderId], (err, results) => {
    if (err) {
      console.error('Error updating data:', err);
      return res.status(500).send('Internal Server Error');
    }

    // Check if the order was found and updated
    if (results.affectedRows === 0) {
      return res.status(404).send('Order not found.');
    } else {
      res.status(200).send('Order updated successfully.');
    }
  });
});

app.post('/deleteorders', (req, res) => {
  const { ordersId } = req.body;

  // Check if productId is provided
  if (!ordersId) {
    return res.status(400).send('productId is required.');
  }

  const query = 'DELETE FROM orders WHERE orderId = ?';

  db.query(query, [ordersId], (err, results) => {
    if (err) {
      console.error('Error deleting product:', err);
      return res.status(500).send('Internal Server Error');
    }

    // Check if the product was found and deleted
    if (results.affectedRows === 0) {
      return res.status(404).send('Product not found.');
    }

    // Product deleted successfully
    res.status(200).send('Product deleted successfully.');
  });
});


// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
