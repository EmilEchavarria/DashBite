const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const session = require('express-session');
const methodOverride = require('method-override');
const passport = require('passport');
const flash = require('connect-flash');
const helmet = require('helmet');
const cors = require('cors');
const cookieParser = require('cookie-parser');

require('./config/passport'); // configuración de passport

const app = express();

// Seguridad y headers
app.use(helmet());
app.use(cors());
app.use(cookieParser());

// Configuración de handlebars
app.engine('.hbs', exphbs.engine({
  extname: '.hbs',
  defaultLayout: 'main',
  layoutsDir: path.join(__dirname, 'views/layouts'),
  partialsDir: path.join(__dirname, 'views/partials')
}));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'views'));

// Archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Formularios y JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Método override (PUT y DELETE desde formularios)
app.use(methodOverride('_method'));

// Sesión
app.use(session({
  secret: process.env.SESSION_SECRET || 'secretKey',  // No hardcoded
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 // 1 día
  }
}));

// Flash messages y Passport
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());

// Variables globales
app.use((req, res, next) => {
  res.locals.user = req.user || null;
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  res.locals.error = req.flash('error');
  next();
});

// Rutas
app.use('/auth', require('./routes/authRoutes'));
app.use('/client', require('./routes/clientRoutes'));
app.use('/commerce', require('./routes/commerceRoutes'));
app.use('/delivery', require('./routes/deliveryRoutes'));
app.use('/admin', require('./routes/adminRoutes'));
app.use('/api', require('./routes/apiRoutes'));

// Ruta raíz
app.get('/', (req, res) => {
  res.redirect('/auth/login');
});

module.exports = app;
