import controllerApi from '../controllers/api.js'
import basicAuth from 'express-basic-auth'
/*-----------------------------------------------------------*/
import express from 'express'
import bodyParser from 'body-parser'
const { Router } = express
const routerApp = new Router()
routerApp.use(bodyParser.json({limit: "50mb"}));
routerApp.use(bodyParser.urlencoded({limit: "50mb", extended: true, parameterLimit:500000}));
/*-----------------------------------------------------------*/

//Validacion de usuario y password

/*-----------------------------------------------------------*/
//Manejador de error a nivel router
routerApp.use((err, req, res, next) => {
    res.status(500).render('error/500.ejs')
})
/*-----------------------------------------------------------*/

// Rutas de API
/*
routerApp.get('/',basicAuth({
    authorizer: myAuthorizer, 
    challenge: true, 
    'WWW-Authenticate': 'Basic',
    realm: 'Default'
}),controllerApi.get)
*/

routerApp.get('/:serial',controllerApi.get)
/*-----------------------------------------------------------*/

export default routerApp