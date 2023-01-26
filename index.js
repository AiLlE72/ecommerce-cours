//Import module
const express = require('express');
const { engine } = require('express-handlebars');
const Sequelize = require('sequelize')
const path = require('path');
const methodOverride = require('method-override');
const session = require('express-session');



// Constante
const app = express()
// const key = require('./config')
const port = process.env.PORT || 5000

const router = require('./api/router')


//test Db 
const db = require('./config')


try {
    db.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }


// initialise sequelize pour les session
const SequelizeStore = require("connect-session-sequelize")(session.Store);

// configure express session
app.use(
  session({
    secret: "keyboard cat",
    store: new SequelizeStore({
      db: db,
    }),
    saveUninitialized: true,
    resave: false, // we support the touch method so per the express-session docs this should be set to false
    proxy: true, // if you do SSL outside of node.
  })
);

app.use('*', (req, res, next) => {
  if (req.session) {
    res.locals.userPk = req.session.userPk
    res.locals.firstName = req.session.firstName
}
  next()
})

// Handlebars
app.engine('hbs', engine({
  extname: 'hbs',
  defaultLayout: 'main'
}));
app.set('view engine', 'hbs')

// Body Parser 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// On crée le lien vers les fichier bootstrap
app.use('/css', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/css')))
app.use('/js', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/js')))
app.use('/jquery', express.static(path.join(__dirname, 'node_modules/jquery/dist')))

//express-handlebars
app.use('/assets', express.static('publics'))


// Router
app.use("/", router)

// Error404
// app.use((req, res) => {
//   res.render('error404')
// })

// Port
app.listen(port, function () {
  console.log(`Le serveur tourne sur http://localhost:${port}`);
})
