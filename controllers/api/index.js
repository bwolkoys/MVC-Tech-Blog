const router = require('express').Router();

const commentRoutes = require('./commentRoutes.js');
const postRoutes = require('./postRoutes.js');
const userRoutes = require('./userRoutes.js');

// --> All of these routes are prefixed with '/api'
router.use('/comment', commentRoutes);
router.use('/post', postRoutes);
router.use('/user', userRoutes);



module.exports = router;