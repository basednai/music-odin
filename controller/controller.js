const db = require('../db/queries')

exports.getIndex = async (req, res) => {
     const songs =  await db.getAll()
    res.render('index', {title: "All Songs", table: songs})
}

