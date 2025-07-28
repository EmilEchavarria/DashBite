const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const session = require('express-session');
const methodOverride = require('method-override');
const passport = require('passport');

require('./config/passport'); // configuración de passport

const app = express();

// Configuración de handlebars
app.engine('.hbs', exphbs.engine({
  extname: '.hbs',
  defaultLayout: 'main',
  layoutsDir: path.join(__dirname, 'views/layouts'),
  partialsDir: path.join(__dirname, 'views/partials')
}));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'views'));

// Middleware para servir archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Middleware para parsear formularios y JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Middleware para soportar PUT y DELETE desde formularios
app.use(methodOverride('_method'));

// Configuración de sesión
app.use(session({
  secret: 'secretKey',  // mejor poner esta clave en .env y no hardcodear
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 // 1 día, ajusta según necesidad
  }
}));

// Inicialización de Passport y sesión
app.use(passport.initialize());
app.use(passport.session());

// Middleware para pasar datos de usuario y mensajes flash a todas las vistas
app.use((req, res, next) => {
  res.locals.user = req.user || null;
  res.locals.messages = req.session.messages || {};
  delete req.session.messages; // limpiar mensajes después de mostrarlos
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
