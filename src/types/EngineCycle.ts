export interface EngineCycle {
	name: string;
	infoUrl?: string;
}

export class EngineCycleUtils {
	public static readonly GAS_GENERATOR: EngineCycle = {
		name: 'Gas Generator',
		infoUrl: 'https://en.wikipedia.org/wiki/Gas-generator_cycle'
	};

	public static readonly STAGED_COMBUSTION: EngineCycle = {
		name: 'Staged Combustion',
		infoUrl: 'https://en.wikipedia.org/wiki/Staged_combustion_cycle'
	};
}
