const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Codtech Task 2: CI/CD Pipeline Demo');
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});