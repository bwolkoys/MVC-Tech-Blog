const Comment = require('./comment');
const Post = require('./post');
const User = require('./user');

// defining all of the different relationships
// one to many relationship between the user and posts, one user can have many posts
User.hasMany(Post, {
  foreignKey: 'user_id',
});

Post.belongsTo(User, {
  foreignKey: 'user_id'
});

//one to many relationship, one post can have many comments
Post.hasMany(Comment,{
  foreignKey: 'blog_id'
})

Comment.belongsTo(User, {
    foreignKey: 'user_id',
})
//one to many- one user can have amny comments 
User.hasMany(Comment, {
    foreignKey: 'user_id'
})

module.exports = { Comment, Post, User };