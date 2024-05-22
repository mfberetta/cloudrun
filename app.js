//Configuracion general del servidor
import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
const app = express()
app.use(bodyParser.json({limit: "50mb"}));
app.use(bodyParser.urlencoded({limit: "50mb", extended: true, parameterLimit:50000}));
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(cors())


/*-----------------------------------------------------------*/
//Router for API bulkdata
import routerApp from './src/routes/api.js'
app.use('/api/haas', routerApp)
/*-----------------------------------------------------------*/
//Manejador de error a nivel aplicacion
app.use((err, req, res, next) => {
    res.status(500).json({ error : 'server error' })
})
/*-----------------------------------------------------------*/
//Manejador de rutas no implementadas (logeo)
app.use((req, res) => {
    if(!req.route){
        const { url, method } = req
        res.status(404).json({ error : 'endpoint not found' })
    }
})
/*-----------------------------------------------------------*/
//puesta en escucha del servidor
const PORT = process.env.PORT || 8080
const server = app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`)
})
server.on("error", error => console.log(`Error en servidor: ${error}`))
server.keepAliveTimeout = 620e3;
