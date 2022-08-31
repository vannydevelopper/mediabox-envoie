const express = require("express")
const jsonController = require("../controller/jsonController")

const jsonRouter = express.Router()
jsonRouter.get("/:id_document", jsonController.findAllDocument)

module.exports = jsonRouter