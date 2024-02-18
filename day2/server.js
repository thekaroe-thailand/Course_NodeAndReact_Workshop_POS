const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// get, post, put, delete, patch

app.get('/', (req, res) => {
  res.send('Hello World!');
})

app.post('/myPost', (req, res) => { // = >
    console.log(req.body.name);
    console.log(req.body.age);
    console.log(req.body.phone);
    
    res.send('post name = ' + req.body['name']);
})

app.put('/myPut', (req, res) => {
    res.send('put method');
})

app.delete('/myDelete/:id', (req, res) => {
    res.send('delete id = ' + req.params.id);
})

// http://localhost:3000/myDelete/1
// http = protocal
// localhost = host
// :3000 = port
// myDelete = route
// 1 = parameter

app.listen(port, () => {
  console.log(`Example app listening on port `, port);
})