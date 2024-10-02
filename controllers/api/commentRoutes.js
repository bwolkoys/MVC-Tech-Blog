const router = require('express').Router();
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth');


//Getting all comments
router.get("/", (req, res) => {
    Comment.findAll()
        .then((commentData) => res.json(commentData))
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});

//Creating a comment
router.post('/', async (req, res) => {
    try {
        //creates a new comment adding user_id so we know which user commented
      const newComment = await Comment.create({
        ...req.body, //learned in module 14- it's a spread operator
        user_id: req.session.user_id,
      });
      res.json(newComment);
    } catch (err) {
      res.status(500).json(err);
    }
  });


module.exports = router;