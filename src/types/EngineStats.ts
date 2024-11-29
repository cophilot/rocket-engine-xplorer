import type { EngineCycle } from './EngineCycle';
import type { Propellant } from './Propellant';
import type { Weight } from './units/Weight';

export default interface EngineStats {
	name: string;
	url: string;
	imageUrl: string;
	schemanticUrl: string;
	propellant: Propellant;
	cycle: EngineCycle;
	specificImpulseSeaLevel: number;
	specificImpulseVacuum: number;
	height: number;
	diameter: number;
	massDry: Weight;
}
