import type Engine from '../types/Engine';
import F1 from './engines/F1';
import RL10 from './engines/RL10';
import RS25 from './engines/RS25';
import RS68 from './engines/RS68';

export const getAllEngines = (): Engine[] => {
	const all = [RS25, RS68, F1, RL10];

	all.sort((a, b) => a.stats.name.localeCompare(b.stats.name));
	return all;
};

export const getEngineByName = (name: string): Engine | undefined => {
	return getAllEngines().find((engine) => engine.checkName(name));
};