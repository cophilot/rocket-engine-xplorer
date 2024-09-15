import type { EngineCycle } from './EngineCycle';
import type { Propellant } from './Propellant';
import type { Weight } from './units/Weight';

export interface EngineStats {
	name: string;
	url: string;
	propellant: Propellant;
	cycle: EngineCycle;
	specificImpulseSeaLevel: number;
	specificImpulseVacuum: number;
	length: number;
	diameter: number;
	massDry: Weight;
}

export function getStats() {
	return {
		name: 'Engine Stats'
	};
}
