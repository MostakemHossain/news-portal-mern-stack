const authControllers = require("../controllers/authControllers");

const router= require("express").Router();

router.post("/api/login",authControllers.login )

module.exports= router; 