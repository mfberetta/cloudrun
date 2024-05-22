import controllerApi from '../controllers/api.js'
/*-----------------------------------------------------------*/
import express from 'express'
import bodyParser from 'body-parser'
const { Router } = express
const routerApp = new Router()
routerApp.use(bodyParser.json({limit: "50mb"}));
routerApp.use(bodyParser.urlencoded({limit: "50mb", extended: true, parameterLimit:500000}));
/*-----------------------------------------------------------*/
//Manejador de error a nivel router
routerApp.use((err, req, res, next) => {
    res.status(500).render('error/500.ejs')
})
/*-----------------------------------------------------------*/
routerApp.get('/:serial',controllerApi.get)
/*-----------------------------------------------------------*/

export default routerApp