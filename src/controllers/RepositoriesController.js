const { uuid } = require('uuidv4');

const repositoriesDatabase = require('../database/Repositories');

class RepositoriesController {
  show(req, res) {
    return res.json({'RepositoriesController.show': repositoriesDatabase});
  }

  store(req, res) {
    const { title, url, techs } = req.body;

    repositoriesDatabase.push({
      id: uuid(),
      title,
      url,
      techs,
      likes: 0
    });

    return res.json({repositoriesDatabase});
  }

  update(req, res) {
    console.log('RepositoriesController.update');
  }

  delete(req, res) {
    console.log('RepositoriesController.delete');
  }
}

module.exports = new RepositoriesController();
