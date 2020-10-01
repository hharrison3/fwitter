const express = require('express');

const app = express();

app.listen(3001, () => {
  // eslint-disable-next-line no-console
  console.log('Server started listening on https://localhost:3001');
});
