const express = require('express');

var app = express();

app.get('/', (req, res)=>{
  res.send('Hello express');
});

app.get('/error', (req, res)=>{
  res.status(404).send({
    error: 'Page not found.'
  });
});

app.get('/more', (req, res)=>{
  res.status(500).send({
      error: 'Server not found.',
      name: 'Todo App v1.0'
  });
});

app.listen(3000);
module.exports.app = app;
