module.exports = app => {
  app.get('/', (req, res) => res.render('index', { "usuarioLogado": req.user.login }));
};
