const express = require('express');
const path = require('path');
const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

let books = [];

app.get('/books', (req, res) => {
  res.status(200).json(books);
});

app.post('/books', (req, res) => {
  const { title, author } = req.body;
  books.push({ title, author });
  res.status(201).json({ message: 'Book added successfully' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`📚 Book API running at http://localhost:${PORT}`);
});
