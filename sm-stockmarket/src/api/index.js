import { version } from '../../package.json';
import { Router } from 'express';
import facets from './facets';
import game from './game'

export default ({ config, db, io }) => {
	let api = Router();

	// mount the facets resource
	api.use('/facets', facets({ config, db }));

	api.use('/game', game(io));

	// perhaps expose some API metadata at the root
	api.get('/', (req, res) => {
		res.json({ version });
	});

	return api;
}
