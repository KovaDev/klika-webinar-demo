const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(__dirname + '/dist/klika-webinar-demo'));
app.get('/*', (_, res) => {
  res.sendFile(path.join(__dirname + '/dist/klika-webinar-demo/index.html'));
});
app.listen(process.env.PORT || 4200);
