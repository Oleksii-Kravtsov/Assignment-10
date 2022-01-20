const Pool = require('pg').Pool
const pool = new Pool({
    user: 'me',
    host: 'localhost',
    database: 'fast-food',
    password: 'password',
    port: 5432
})

const getLocation = (req, res) => {
    pool.query('SELECT * FROM location ORDER BY restaurantsid ASC', (error, results) =>{
        if(error){
            throw error
        }
        res.status(200).json(results.rows)
    })
}

module.exports = {getLocation}