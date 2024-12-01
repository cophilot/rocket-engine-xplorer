import StringUtils from '../utils/StringUtils';
import type EngineStats from './EngineStats';

export default class Engine {
	public readonly stats: EngineStats;

	constructor(stats: EngineStats) {
		this.stats = stats;
	}

	public checkName(name: string): boolean {
		return StringUtils.normalizeString(name) === StringUtils.normalizeString(this.stats.name);
	}
}
