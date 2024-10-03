//from module 14 student activity 28
//importing sequelize, deconstructing user and post, importing 2 json files

const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userData = require('./userData.json');
const postData = require('./postData.json');
//seed function. the force: true drops current tables and recreates them so everything is up to date
const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  //this creates multiple users in a database
  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });
//each posts creates a new record in the database and assigns a user_id from the user to the right post from the user
  for (const post of postData) {
    await Post.create({
      ...post,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  process.exit(0);
};

seedDatabase();
