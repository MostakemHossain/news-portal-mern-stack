const express = require('express')
const app = express()
const dotenv= require("dotenv");
const cors= require("cors")
const body_parser = require("body-parser");
dotenv.config();
const port = process.env.port;
app.use(body_parser.json( ))
const db_connect= require("./utils/db")
if(process.env.mode==='production'){
    app.use(cors())
}else{
    app.use(cors({origin:"http://localhost:5173"}))
}

app.use("/",require("./routes/authRoutes"))
app.get('/', (req, res) => res.send('Hello World!'))
db_connect()
app.listen(port, () => console.log(`Example app listening on port ${port}!`))