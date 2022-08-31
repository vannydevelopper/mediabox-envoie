const {query} = require("../functions/db")

const findAll = async (id_document) => {
       try{
              return query("SELECT * FROM doc_document WHERE 1 AND id = ?",[id_document])
       }
       catch(error){
              throw error
       }
}

module.exports={
       findAll
}