const { Router } = require("express")

const usersRoutes = require("./user.routes")

const routes = Router()
routes.use("/users", usersRoutes)

module.exports = routes