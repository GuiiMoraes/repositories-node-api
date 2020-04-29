const { uuid } = require('uuidv4');

const repositoriesDatabase = require('../database/Repositories');

class RepositoriesController {
  show(req, res) {
    return res.json({'RepositoriesController.show': repositoriesDatabase});
  }

  store(req, res) {
    const { name } = req.body;

    repositoriesDatabase.push(name);

    return res.json({'RepositoriesController.store': repositoriesDatabase});
  }

  update(req, res) {
    console.log('RepositoriesController.update');
  }

  delete(req, res) {
    console.log('RepositoriesController.delete');
  }
}

module.exports = new RepositoriesController();
