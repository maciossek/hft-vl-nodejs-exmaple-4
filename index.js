const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const routes = require('./routes');
const port = process.env.PORT || 3000;
const app = express();

app.use(cors());
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.use('/public', express.static(process.cwd() + '/public'));
app.use('/api', routes)


app.listen(port, () => {
  console.log(`Server listening on port ${port}…`)
});
