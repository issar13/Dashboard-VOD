const { count } = require('../../../db');
const Knex = require('../../../db');

const knexConfig = require('../../../db/knexfile');
const router = require('../../../routes');

const knex = Knex(knexConfig[process.env.NODE_ENV]);


async function showDashboard(req, res) {
    const users = await knex.select().from('users');
    let numberUsers= users.length
  res.render('pages/dashboard',{numberUsers:numberUsers});
//   res.render('partials/header',{numberUsers:numberUsers})
}



module.exports = showDashboard;