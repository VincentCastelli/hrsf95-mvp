const express = require('express');
const bodyparser = require('body-parser');
const path = require('path');

const app = express();

app.use(bodyparser.json());
app.use('/', express.static(path.join(__dirname, '../public')));


const port = process.env.PORT || 3000;

app.listen(3000, () => {
  console.log(`Listening on port ${port}`);
});
