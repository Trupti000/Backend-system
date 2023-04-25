const {postUser,postLogins,getUser,putUser,deleteUser} = require("../Controller/userController")

const route = require("express").Router()

route.post("/",postUser)

route.post("/login",postLogins)

route.get("/",getUser)

route.put("/:id",putUser)

route.delete("/:id",deleteUser)

module.exports = route