const Atendimento = require('../models/atendimentos');

module.exports = app => {
  app.get('/atendimentos', (req, res) => {
    Atendimento.lista(res);
  });

  app.get('/atendimentos/:id', (req, res) => {
    Atendimento.buscaPorId(+req.params.id, res);
  });

  app.post('/atendimentos', (req, res) => {
    Atendimento.adiciona(req.body, res);
  });

  app.patch('/atendimentos/:id', (req, res) => {
    Atendimento.altera(+req.params.id, req.body, res);
  });

  app.delete('/atendimentos/:id', (req, res) => {
    Atendimento.deleta(+req.params.id, res);
  });
}