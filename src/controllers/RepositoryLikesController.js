const { isUuid } = require('uuidv4');

const repositoriesDatabase = require('../database/Repositories');

class RepositoryLikesController {
  store(req, res) {

    const { id } = req.params;

    if (!isUuid(id)) {
      return res.status(400).json({ error: 'this is not an valid id' });
    }

    const repositoryIndex = repositoriesDatabase.findIndex(
      (repo) => repo.id === id
    );

    if (repositoryIndex < 0) {
      return res.status(400).json({ error: 'repository not founded' });
    }

    repositoriesDatabase[repositoryIndex] = {
      id,
      title: repositoriesDatabase[repositoryIndex].title,
      url: repositoriesDatabase[repositoryIndex].url,
      techs: repositoriesDatabase[repositoryIndex].techs,
      likes: repositoriesDatabase[repositoryIndex].likes + 1,
    };

    return res.json(repositoriesDatabase);
  }
}

module.exports = new RepositoryLikesController();
