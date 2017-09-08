const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send({hi: 'there' });
});

// on production use dynamic port, on dev use 5000 port
const PORT = process.env.PORT || 5000;
app.listen(5000);
