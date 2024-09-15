import type { EngineCycle } from './EngineCycle';
import type { Propellant } from './Propellant';

export interface EngineStats {
	name: string;
	url: string;
	propellant: Propellant;
	cycle: EngineCycle;
	specificImpulseSeaLevel: number;
	specificImpulseVacuum: number;
	length: number;
	diameter: number;
	massDry: number;
}

export function getStats() {
	return {
		name: 'Engine Stats'
	};
}
