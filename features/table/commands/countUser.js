const Knex = require('../../../db');

const knexConfig = require('../../../db/knexfile');
const router = require('../../../routes');

const knex = Knex(knexConfig[process.env.NODE_ENV]);


async function countUser(req, res) {
    const count = await knex.count('id').from('users').then(function(total) {
        parseInt(
            total[0]
        );
      });;
    res.render('partials/header',{count:count})
    return router;
}

module.exports = countUser;