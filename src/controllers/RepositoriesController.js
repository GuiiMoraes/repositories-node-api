const { uuid, isUuid } = require('uuidv4');

const repositoriesDatabase = require('../database/Repositories');

class RepositoriesController {
  show(req, res) {
    return res.json(repositoriesDatabase);
  }

  store(req, res) {
    const { title, url, techs } = req.body;

    const newRepository = {
      id: uuid(),
      url,
      title,
      techs,
      likes: 0,
    }

    repositoriesDatabase.push(newRepository);

    return res.json(newRepository);
  }

  update(req, res) {
    const { id } = req.params;
    const { title, url, techs } = req.body;

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
      title,
      url,
      techs,
      likes: repositoriesDatabase[repositoryIndex].likes,
    };

    return res.json(repositoriesDatabase[repositoryIndex]);
  }

  delete(req, res) {
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

    repositoriesDatabase.splice(repositoryIndex, 1);

    return res.status(204).send();
  }
}

module.exports = new RepositoriesController();
