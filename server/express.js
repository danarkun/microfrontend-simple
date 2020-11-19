const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 8000;

// Disable automatic indexing to index.html
var useOptions = {
  index: false
}

var headerOptions = {
  "Access-Control-Allow-Origin" : "*"
}

app.listen(port, () => console.log(`Listening on port ${port}`));

app.use(express.static(path.join(__dirname, '../build'), useOptions));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '../build', 'index.html'), { headers: headerOptions });
});

// Return manifest file when requested through /manifest
app.get('/manifest', (req, res) => {
  res.sendFile(path.join(__dirname, '../build', 'asset-manifest.json'), { headers: headerOptions });
})