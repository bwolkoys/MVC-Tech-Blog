const router = require('express').Router();
const sequelize = require('../config/connection');
//deconstructing so I can import 3 files from the models folder
const { User, Post, Comment } = require('../models');
//node application and it's requiring the function from a file located in utils folder
const withAuth = require('../utils/auth');

//retrieving all records in the post model with the specific attributes below including the commentswith specific attributs including the username
router.get('/', (req, res) => {
    Post.findAll({
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
                        'comment_content', 
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
        //using the map function to go over each post and the plain: true converts it into an object in js
        .then(postData => {
            const posts = postData.map(post => post.get(
                {
                plain: true
            }));

            res.render('homepage', {
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

//finding a single post with a specific id. The post will include the id, title, contect, when it was created, and include comments and username
router.get('/post/:id', (req, res) => {
    Post.findOne({
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
            //this should only show the single post, not a ;ist of all of them
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

//the login route. it checks if the user is logged in, if so user is redirected to homepage
router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }
// user not logged in, it will go to login view to login
    res.render('login');
});

//same as above but if user isn't loggedin, it will take user to signup page
router.get('/signup', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }

    res.render('signup');
});

// using the * to catch all get requests that don't fit into the above two
router.get('*', (req, res) => {
    res.status(404).send("Can't go there!");
    // res.redirect('/');
});


module.exports = router;
