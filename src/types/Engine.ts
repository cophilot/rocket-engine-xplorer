import StringUtils from '../utils/StringUtils';
import type EngineStats from './EngineStats';

export default class Engine {
	public readonly stats: EngineStats;
	public urlName: string;

	constructor(stats: EngineStats) {
		this.stats = stats;
		this.urlName = StringUtils.normalizeString(stats.name);
	}

	public checkName(name: string): boolean {
		return StringUtils.normalizeString(name) === StringUtils.normalizeString(this.stats.name);
	}
}
