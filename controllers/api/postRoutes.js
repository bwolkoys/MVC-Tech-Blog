const router = require('express').Router();
const { Post } = require('../../models');
const withAuth = require('../../utils/auth');

// --> All of these routes are prefixed with '/api/post'
router.post('/', withAuth, async (req, res) => {

  //console.log("Request Object: ", req)

  console.log("incoming Data: ", req.body)  // { title: '', content: '' }

  try {
    //creates a new post adding user_id so we know which user posted
    const newPost = await Post.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newPost);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    //deleting a post and making sure the post id matches to be deleted
    const postData = await Post.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!postData) {
      res.status(404).json({ message: 'Post not found' });
      return;
    }

    res.status(200).json(postData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;