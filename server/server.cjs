const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const app = express();
const PORT = 3031;
const path = require('path');

// create a connection to the MySQL database
const db = mysql.createConnection({
  host: 'sql5.freesqldatabase.com',
  user: 'sql5721281',
  port: 3306,
  password: 'VsfQvIfZr1',
  database: 'sql5721281'
});

// connect to the database and handle any connection errors
db.connect(err => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('active');
});

// middleware to parse JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// serve static files from the 'dist' directory
app.use(express.static(path.join(__dirname, 'dist')));
// serve images from the 'src/images' directory
app.use('/images', express.static(path.join(__dirname, 'src', 'images')));

// enable CORS for requests from a specific origin
app.use(cors({
  origin: 'http://localhost:5173'
}));

// define a route to check if the server is active
app.get('/', (req, res) => {
  return res.json('active');
});

// define a route to fetch products from the database
app.get('/Products', (req, res) => {
  const { category } = req.query;
  let query = 'SELECT * FROM Products';
  
  // modify the query if a category is specified
  if (category) {
    query += ` WHERE category = '${category}'`;
  }

  // execute the query and handle any errors
  db.query(query, (err, results) => {
    if (err) {
      console.error('Error fetching products:', err);
      res.status(500).send('Error fetching products');
      return;
    }
    res.json(results);
    console.log(results);
  });
});

// serve the index.html file for any other routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', '/index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});









