const express = require('express');
const app = express();
const port = 3000;
const router = require('./routers');

app.use(express.json());

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
