const { Router } = require("express")

const UsersRoutes = Router()
 
UsersRoutes.post('/', (req, res) => {
  const { name, email, password } = req.body

  res.json({ name, email, password })
})

module.exports = UsersRoutes