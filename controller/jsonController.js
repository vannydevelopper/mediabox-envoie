const jsonModel = require("../model/jsonModel")
const request = require('request')
const findAllDocument = async (req, res) => {
       try {
              const { id_document } = req.params
              const document = (await jsonModel.findAll(id_document))[0]
              console.log(document)
              const donnees = JSON.stringify(document)
              if (document) {
                     var url = 'http://localhost:3000/document/json';
                     var data = document

                     var response = request({
                            url: url,
                            method: "POST",
                            json: {data}
                     });
              }
              res.status(200).json({
                     succes: "true",
                     // document,
                     document
              })
       }
       catch (error) {
              console.log(error)
              res.status(500).send("server error")
       }
}


module.exports = {
       findAllDocument,
}