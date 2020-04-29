const { Router } = require('express');

const RepositoriesController = require('./controllers/RepositoriesController');
const RepositoryLikesController = require('./controllers/RepositoryLikesController');

const routes = new Router();

routes.get('/repositories', RepositoriesController.show);
routes.post('/repositories', RepositoriesController.store);
routes.put('/repositories/:id', RepositoriesController.update);
routes.delete('/repositories/:id', RepositoriesController.delete);

routes.post('/repositories/:id/like', RepositoryLikesController.store);

module.exports = routes;
