// ~~new-engine-import~~
import REAVER from './engines/REAVER';
import LE9 from './engines/LE9';
import type Engine from '../types/Engine';
import AJ10 from './engines/AJ10';
import BE4 from './engines/BE4';
import F1 from './engines/F1';
import J2 from './engines/J2';
import MERLIN from './engines/MERLIN';
import RAPTOR from './engines/RAPTOR';
import RD180 from './engines/RD180';
import RL10 from './engines/RL10';
import RS25 from './engines/RS25';
import RS68 from './engines/RS68';
import RUTHERFORD from './engines/RUTHERFORD';
import VIKING from './engines/VIKING';
import VINCI from './engines/VINCI';
import VULCAIN from './engines/VULCAIN';

export const getAllEngines = (): Engine[] => {
	const all = [
		// ~~new-engine~~
		REAVER,
		LE9,
		RS25,
		RS68,
		F1,
		RL10,
		VINCI,
		RD180,
		RAPTOR,
		BE4,
		MERLIN,
		RUTHERFORD,
		VULCAIN,
		VIKING,
		J2,
		AJ10
	];

	all.sort((a, b) => a.stats.name.localeCompare(b.stats.name));
	return all;
};

export const getEngineByName = (name: string): Engine | undefined => {
	return getAllEngines().find((engine) => engine.checkName(name));
};

export const getEngineByNameOrRandom = (name: string): Engine => {
	const engine = getAllEngines().find((engine) => engine.checkName(name));
	if (engine) {
		return engine;
	}
	return getRandomEngine();
};

export const getRandomEngine = (): Engine => {
	const engines = getAllEngines();
	return engines[Math.floor(Math.random() * engines.length)];
};
