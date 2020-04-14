const express = require("express");
const pdsController = require('./controllers/pdsController');
const userController = require('./controllers/userController');
const sessionController = require('./controllers/sessionController');

routes = express.Router();


//Login
routes.post('/session',sessionController.create);
//index
routes.get("/",(req,res)=>{res.json(msg ='Olá seja bem vindo')})

//PDS
routes.get("/pds",pdsController.index);
routes.post("/pds",pdsController.create);
routes.delete("/pds/:id",pdsController.delete);

//USER
routes.post("/user",userController.create);
routes.get("/user",userController.index);
routes.delete("/user/:id",userController.delete);





module.exports = routes;