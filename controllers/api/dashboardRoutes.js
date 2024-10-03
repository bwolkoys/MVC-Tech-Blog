const router = require('express').Router();
const sequelize = require('../config/connection');
//deconstructing so I can import 3 files from the models folder
const { user, post, comment } = require('../models');
//node application and it's requiring the function from a file located in utils folder
const withAuth = require('../utils/auth');

router.get('/', withAuth, (req, res) => {
    Post.findAll({
            where: {
                user_id: req.session.user_id
            },
            attributes: [
                'id',
                'title',
                'content',
                'created_at'
            ],
            include: [
                {
                    model: Comment,
                    attributes: [
                        'id', 
                        'comment_text', 
                        'post_id', 
                        'user_id', 
                        'created_at'
                    ],
                    include: {
                        model: User,
                        attributes: ['username']
                    }
                },
                {
                    model: User,
                    attributes: ['username']
                }
            ]
        })
        .then(postData => {
            const posts = postData.map(post => post.get(
                {
                plain: true
            }));

            res.render('dashboard', {
                //passing posts and loggedIn as an object into a template called homepage
                posts,
                loggedIn: req.session.loggedIn
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.get('/post/:id', (req, res) => {
    post.findOne({
            where: {
                id: req.params.id
            },
            attributes: [
                'id',
                'title',
                'content',
                'created_at'
            ],
            include: [
                {
                    model: Comment,
                    attributes: [
                        'id', 
                        'comment_text', 
                        'post_id', 
                        'user_id', 
                        'created_at'
                    ],
                    include: {
                        model: User,
                        attributes: ['username']
                    }
                },
                {
                    model: User,
                    attributes: ['username']
                }
            ]
        })
        .then(postData => {
            //if postData ins't found message will say no post found
            if (!postData) {
                res.status(404).json({
                    message: 'No post found'
                });
                return;
            }
            // the post is found, it conveets it to plain js object
            const post = postData.get({
                plain: true
            });
            //this should only show the single post, not a list of all of them
            res.render('one-post', {
                post,
                loggedIn: req.session.loggedIn
            }
        );
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.get('/new', (req, res) => {
    res.render('new-post', {
        loggedIn: true
    })
})

module.exports = router;