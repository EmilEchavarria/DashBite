exports.login = (req, res) => {
  // lógica de autenticación con passport aquí
  res.send('Intentando login');
};

exports.showLoginForm = (req, res) => {
  res.render('auth/login');
};
