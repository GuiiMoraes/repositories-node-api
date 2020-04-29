const { uuid } = require('uuidv4');

const repositoriesDatabase = require('../database/Repositories');

class RepositoryLikesController {
  store(req, res) {
    console.log('RepositoryLikesController.store');
  }
}

module.exports = new RepositoryLikesController();
