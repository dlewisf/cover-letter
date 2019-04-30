const express = require('express');
const path = require('path');
const app = express();
const package = require('../package.json');

app.use(express.static('public'));;
app.get('/', (req, res)=> res.send(path.join(__dirname , '..', 'public/index.html')));

app.listen(package.config.PORT, ()=>{
  console.log(`Listening on port ${package.config.PORT}`);
});