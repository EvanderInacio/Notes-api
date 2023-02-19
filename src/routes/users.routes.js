const { Router } = require("express")

const UsersController = require("../controllers/UsersController")

const UsersRoutes = Router()

// function to check the content of the request
// function myMiddleware(request, response, next) {
//   console.log("voce passou pelo middleware")

//   next() // call the function to be executed (usersController)
// }



const usersController = new UsersController()
 
UsersRoutes.post("/", usersController.create)

module.exports = UsersRoutes