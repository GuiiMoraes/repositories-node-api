const { uuid, isUuid } = require('uuidv4');

const repositoriesDatabase = require('../database/Repositories');

class RepositoriesController {
  show(req, res) {
    return res.json(repositoriesDatabase);
  }

  store(req, res) {
    const { title, url, techs } = req.body;

    repositoriesDatabase.push({
      id: uuid(),
      title,
      url,
      techs,
      likes: 0,
    });

    return res.json({ repositoriesDatabase });
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

    if (repositoryIndex > 0) {
      return res.status(400).json({ error: 'repository not founded' });
    }

    repositoriesDatabase[repositoryIndex] = {
      id,
      title,
      url,
      techs,
      likes: repositoriesDatabase[repositoryIndex].likes,
    };

    return res.json(repositoriesDatabase);
  }

  delete(req, res) {
    console.log('RepositoriesController.delete');
  }
}

module.exports = new RepositoriesController();
