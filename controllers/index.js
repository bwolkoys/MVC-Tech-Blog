//importing express router
const router = require('express').Router();
//importing the route handlers from 3 spereate files
const apiRoutes = require('./api');
const dashboardRoutes = require('./dashboardRoutes.js');
const homeRoutes = require('./homeRoutes.js');

//defining the 3 different route paths
router.use('/api', apiRoutes);
router.use('/dashboard', dashboardRoutes);
// root path
router.use('/', homeRoutes);


router.use((req, res) => {
    res.status(404).end();
});


module.exports = router;