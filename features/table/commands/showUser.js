const Knex = require('../../../db');

const knexConfig = require('../../../db/knexfile');

const knex = Knex(knexConfig[process.env.NODE_ENV]);

async function showUser(req, res) {
    const {user} = await knex.select().table('users');
      res.json({user});
}

module.exports = {showUser};