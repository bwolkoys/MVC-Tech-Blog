// page taken from Module 14 MVC, Mini Project (Activity 28)
const path = require('path');
const express = require('express');
const session = require('express-session');
const { engine } = require('express-handlebars');
const routes = require('./controllers');
const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

const sess = {
    secret: 'Super secret secret',
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
      db: sequelize
    })
  };
  //taken from express handlebars documentation
  app.engine('handlebars', engine());
  app.set('view engine', 'handlebars');
  app.set('views', './views');

  app.use(session(sess));
  
  app.use(express.json());
  //express.static is a middleware function and it serves statif files such as js files, css, files
  //I did the public file so that the application can serve static files from the 'public' folder that holds my js and css files.
  app.use(express.static(path.join(__dirname, 'public')));
  app.use(express.urlencoded({ extended: true }));
  
  app.use(routes);
  
  sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`Now listening on port ${PORT}`));
  });