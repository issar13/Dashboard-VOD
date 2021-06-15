const express = require('express');
const router = express.Router();


const mountRegisterRoutes = require('../features/register/routes');
const mountLoginRoutes = require('../features/login/routes');
const mountLogoutRoutes = require('../features/logout/routes');
const mountResetPasswordRoutes = require('../features/reset-password/routes');
const mountProfileRoutes = require('../features/profile/routes');
const {showUser} = require('../features/table/commands/showUser');

function isAuthenticated(req, res, next) {
  if (req.user && req.isAuthenticated()) {
    
    return next();
  }

  return res.redirect('/login');
}

/* GET home page. */
router.get('/', isAuthenticated, (req, res) => {
  res.render('pages/dashboard');
});

router.get('/icons', isAuthenticated, (req, res) => {
  res.render('pages/icons');
});

router.get('/maps', isAuthenticated, (req, res) => {
  res.render('pages/maps');
});

router.get('/profile', isAuthenticated, (req, res) => {
  res.render('pages/profile');
});

router.get('/tables', isAuthenticated, (req, res) => {
  res.render('pages/tables',{showUser});
});

router.get('/test', isAuthenticated, (req, res) => {
  res.render('pages/test');
});


mountRegisterRoutes(router);
mountLoginRoutes(router);
mountLogoutRoutes(router, [isAuthenticated]);
mountResetPasswordRoutes(router);
mountProfileRoutes(router, [isAuthenticated]);

module.exports = router;
