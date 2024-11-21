const express = require('express')
const app = express()
const dotenv= require("dotenv");
dotenv.config();
const port = process.env.port;
const db_connect= require("./utils/db")

app.get('/', (req, res) => res.send('Hello World!'))
db_connect()
app.listen(port, () => console.log(`Example app listening on port ${port}!`))