import type EngineStats from '../types/EngineStats';
import RS25 from './engines/RS25';
import RS68 from './engines/RS68';

const getAllEngines = (): EngineStats[] => {
	const all = [RS25, RS68];

	// sort by name
	all.sort((a, b) => a.name.localeCompare(b.name));
	return all;
};

export default getAllEngines;
