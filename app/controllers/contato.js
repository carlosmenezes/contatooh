module.exports = function (app) {

  var controller = {};
  var Contato = app.models.contato;

  controller.listaContatos = function (req, res) {

    Contato.find().populate('emergencia').exec()
      .then(contatos => {
        res.json(contatos);
      }, erro => {
        console.error(erro);
        res.status(500).json(erro);
      });
  };

  controller.obtemContato = function (req, res) {

    var _id = req.params.id;
    Contato.findById(_id).exec()
      .then(contato => {
        if (!contato) throw new Error("Contato não encontrado.");
        res.json(contato);
      }, erro => {
        console.error(erro);
        res.status(404).json(erro);
      });
  };

  controller.salvaContato = function(req, res) {

    var _id = req.body._id;

    req.body.emergencia = req.body.emergencia || null

    if (_id) {
      Contato.findByIdAndUpdate(_id, req.body).exec()
        .then(contato => res.json(contato),
        erro => {
          console.error(erro);
          res.status(500).json(erro);
        });
    } else {
      Contato.create(req.body)
        .then(contato => res.status(201).json(contato),
        erro => {
          console.error(erro);
          res.status(500).json(erro);
        });
    }
  };

  controller.removeContato = function(req, res) {

    var _id = req.params.id;
    Contato.remove({ "_id": _id }).exec()
      .then(() => res.end(), erro => console.error(erro));
  };

  return controller;
};
