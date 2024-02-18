const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  let d = new Date();
  console.log(d.getFullYear());
  console.log(d.getMonth() + 1);
  console.log(d.getDate());
  console.log(d.getHours());
  console.log(d.getMinutes());
  console.log(d.getSeconds());
  console.log(d.getMilliseconds());
  console.log(d.getTime());
  console.log(d.toLocaleString('th-TH'));

  res.send('success');
})

app.get('/myNumber', (req, res) => {
  let x = 10.88;
  let y = "15.21";
  let result = x + parseInt(y);

  res.send({result: (result.toFixed(3) + "")});
})

app.get('/myString', (req, res) => {
  let str = 'Hello Node.js Developer in Thailand.';

  str = str.concat(' in Group Facebook');

  let arr = str.split(' ');

  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }

  let countI = 0;
  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) == 'i') {
      countI++;
    }
  }
  console.log(countI);

  res.send({
    str: str,
    strLenght: str.length,
    indexOf: str.indexOf('Node'),
    startHello: str.startsWith('Hello'),
    endWith: str.endsWith('Thailand')
  })
})

app.get('/myArray', (req, res) => {
  let arr = [];

  for (let i = 0; i < 10; i++) {
    arr.push({
      id: i,
      name: 'my name',
    })
  }

  res.send({results: arr, size: arr.length});
})

app.get('/myArray2', (req, res) => {
  let arr = [3, 5, 7, 9, 11, 13];

  arr.map(item => {
    console.log(item);
  });

  res.send();
})

app.listen(port, () => {
  console.log(`Example app listening on port `, port);
})