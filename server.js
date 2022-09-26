const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 3000;

// mount middleware for json
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// mount middleware for static files
app.use(express.static(path.join(__dirname, 'public')));

// mount middleware for routes
app.use('/api/notes', require('./routes/apiRoutes'));
app.use('/', require('./routes/htmlRoutes'));

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
