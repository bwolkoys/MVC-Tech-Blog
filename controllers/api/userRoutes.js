const router = require('express').Router();
const { User } = require('../../models');

// --> All of these routes are prefixed with '/api/user'

//creating a new user. inside the try {} im calling user.create to create a new user. req.body includes username an dpassword
router.post('/', async (req, res) => {
    try {
      const userData = await User.create(req.body);
  
      req.session.save(() => { // saves data
        req.session.user_id = userData.id; // assigns a new id to the user
        req.session.logged_in = true; //then logs in the user
  
        res.status(200).json(userData);
      });
    } catch (err) {
      res.status(400).json(err);
    }
  });

router.post('/login', async (req, res) => {
  try {
    //attempting to find a user in the database by username
    const userData = await User.findOne({ 
			where: { username: req.body.username } 
		});
        //if user is not found in database a message will pop up saying wrong username or password
    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect username or password' });
      return;
    }
    // if the password isn't valide, similar response to before
    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect username or password' });
      return;
    }

    req.session.save(() => { //saves data
      req.session.user_id = userData.id; // assigns a new id to the user
      req.session.logged_in = true; //then logs in the user
      
      res.json({ user: userData, message: 'You are now logged in!' });
    });

  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/logout', (req, res) => {
  if (req.session.logged_in) { //checks to see if the ser is loggedin 
    //if the user is logged in it will "destroy" the session 
    req.session.destroy(() => {
      res.status(204).end();
    });
    //if user is not loggedin in, it will respond with 404 and end the session
  } else {
    res.status(404).end();
  }
});

module.exports = router;