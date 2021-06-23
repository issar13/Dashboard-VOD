const Knex = require('../../../db');

const knexConfig = require('../../../db/knexfile');
const router = require('../../../routes');

const knex = Knex(knexConfig[process.env.NODE_ENV]);


async function showUser(req, res) {
    const users = await knex.select().from('users');
    res.render('pages/tables',{users:users})
}



module.exports = showUser;