const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const app = express();
const PORT = 3031;
const path = require('path');

const db = mysql.createConnection({
  host: 'sql5.freesqldatabase.com',
  user: 'sql5721281',
  port: 3306,
  password: 'VsfQvIfZr1',
  database: 'sql5721281'
});

db.connect(err => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('active');
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'dist')));
app.use('/images', express.static(path.join(__dirname, 'src', 'images')));

app.use(cors({
  origin: 'http://localhost:5173'
}));

app.get('/', (req, res) => {
  return res.json('active');
});

app.get('/Products', (req, res) => {
  const { category } = req.query;
  let query = 'SELECT * FROM Products';
  
  if (category) {
    query += ` WHERE category = '${category}'`;
  }

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

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', '/index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});








