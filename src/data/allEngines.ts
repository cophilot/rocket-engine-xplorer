import type Engine from '../types/Engine';
import BE4 from './engines/BE4';
import F1 from './engines/F1';
import MERLIN from './engines/MERLIN';
import RAPTOR from './engines/RAPTOR';
import RD180 from './engines/RD180';
import RL10 from './engines/RL10';
import RS25 from './engines/RS25';
import RS68 from './engines/RS68';
import VINCI from './engines/VINCI';

export const getAllEngines = (): Engine[] => {
	const all = [RS25, RS68, F1, RL10, VINCI, RD180, RAPTOR, BE4, MERLIN];

	all.sort((a, b) => a.stats.name.localeCompare(b.stats.name));
	return all;
};

export const getEngineByName = (name: string): Engine | undefined => {
	return getAllEngines().find((engine) => engine.checkName(name));
};

export const getRandomEngine = (): Engine => {
	const engines = getAllEngines();
	return engines[Math.floor(Math.random() * engines.length)];
};
