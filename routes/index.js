const express = require('express');
const router = express.Router();


const mountRegisterRoutes = require('../features/register/routes');
const mountLoginRoutes = require('../features/login/routes');
const mountLogoutRoutes = require('../features/logout/routes');
const mountResetPasswordRoutes = require('../features/reset-password/routes');
const mountProfileRoutes = require('../features/profile/routes');
const showUser = require('../features/table/commands/showUser');
const countUser = require('../features/table/commands/countUser');

function isAuthenticated(req, res, next) {
  if (req.user && req.isAuthenticated()) {
    
    return next();
  }

  return res.redirect('/login');
}

/* GET home page. */
router.get('/', isAuthenticated , (req, res) => {
  res.render('pages/dashboard');
});



router.get('/icons', isAuthenticated, countUser);

router.get('/maps', isAuthenticated, (req, res) => {
  res.render('pages/maps');
});

router.get('/profile', isAuthenticated, (req, res) => {
  res.render('pages/profile');
});

router.get('/tables', isAuthenticated, showUser);

router.get('/test', isAuthenticated, (req, res) => {
  res.render('pages/test');
});

router.get('header', isAuthenticated, countUser)


mountRegisterRoutes(router);
mountLoginRoutes(router);
mountLogoutRoutes(router, [isAuthenticated]);
mountResetPasswordRoutes(router);
mountProfileRoutes(router, [isAuthenticated]);

module.exports = router;
