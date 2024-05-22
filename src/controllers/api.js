
export default {
    get: async (req, res, next) => { 
        try{
            res.json({'mensaje': 'hola mundo!'})
        }
        catch (error){
            next(error)
        }
    }
}
