const UserController = require('./controllers/UserController')
const CoffeeController = require('./controllers/CoffeeController')
const UserAuthenController = require('./controllers/UserAuthenController');
const isAuthenController = require('./authen/isAuthenController')

module.exports = (app) => {
    app.post('/user', UserController.create)
    
    app.put('/user/:userId', UserController.put)
    
    app.delete('/user/:userId', UserController.remove)
    
    app.get('/user/:userId', UserController.show)
    
    app.get('/users', isAuthenController, UserController.index)

    //Coffee
    app.post('/Coffee', CoffeeController.create)
    
    app.put('/Coffee/:CoffeeId', CoffeeController.put)
    
    app.delete('/Coffee/:CoffeeId', CoffeeController.remove)
    
    app.get('/Coffee/:CoffeeId', CoffeeController.show)
    
    app.get('/Coffees', CoffeeController.index)

}