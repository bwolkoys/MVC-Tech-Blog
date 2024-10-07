// taken from Module 14, Activity 23 Ins_Auth-Review
//Auth comes from middleware folder
const withAuth = (req, res, next) => {
    console.log("Hit Auth Middleware")
    //if user isn't logged in it will redirect the user to the home page
    if (!req.session.user_id) {
        console.log("User not Authorized!")
        res.redirect('/login');
    } else {
        next();
    }
};

module.exports = withAuth;