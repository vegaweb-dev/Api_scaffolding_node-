require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const routes = require('./routes');
const app = express();
routes(app);

app.use(express.json());
app.use(morgan('dev'));


const tasks = [
    {
        id: 1,
        actividad: 'regar plantas'
    },

    {
        id: 1,
        actividad: 'regar plantas'
    }
]


app.get('/api/tasks', (req, res) => {
    const task = req.body;
    return res.json(tasks);
});



const port = process.env.PORT || 8080;
app.listen(port);
console.log(`service runnig at port: ${port}`);