const express = require("express");
const userController = require('./controllers/userController');
const sessionController = require('./controllers/sessionController');
const cardController = require('./controllers/cardController');
const SystemController = require('./controllers/systemController');
const servicesController = require('./controllers/servicesController');
routes = express.Router();


//Login
routes.post('/session',sessionController.create);
//index
routes.get("/",(req,res)=>{res.json(msg ='Olá seja bem vindo')})

//USER
routes.post("/user",userController.create);
routes.get("/user",userController.index);
routes.delete("/user/:id",userController.delete);


//CARD
routes.post('/card', cardController.create);
routes.get('/card', cardController.index);
routes.delete('/card/:id_user_card', cardController.delete);


//SYSTEM
routes.get('/system',SystemController.listPds);

//SERVICES
routes.post('/services',servicesController.create);
routes.delete('/services/:id_user',servicesController.delete);
routes.get('/services/:id_user',servicesController.index);
module.exports = routes;