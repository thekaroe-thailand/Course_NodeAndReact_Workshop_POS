const express = require('express')
var cors = require('cors')
const app = express()
const port = 3000
const bodyParser = require('body-parser');

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const client = require('./connect');

app.get('/testConnect', async (req, res) => {
    try {
        await client.authenticate();
        res.send('Connection has been established successfully.');
    } catch (error) {
        res.statusCode = 500;
        res.send('Unable to connect to the database:');
    }
})

const EmployeeModel = require('./models/employee');

app.post('/insert', async (req, res) => {
    const rows = await EmployeeModel.create(req.body);
    res.send({rows: rows});
})

app.get('/select', async (req, res) => {
    const rows = await EmployeeModel.findAll();
    res.send(rows);
})

app.delete('/delete/:id', async (req, res) => {
    const rows = await EmployeeModel.destroy({
        where: {
            id: req.params.id
        }
    });
    res.send({rows: rows});
})

app.put('/update', async (req, res) => {
    const rows = await EmployeeModel.update(req.body, {
        where: {
            id: req.body.id
        }
    });
    res.send({rows: rows});
})

app.get('/info/:id', async (req, res) => {
    const rows = await EmployeeModel.findByPk(req.params.id);
    res.send({rows: rows});
})

app.listen(port, () => {
    console.log(`Example app listening on port `, port);
})