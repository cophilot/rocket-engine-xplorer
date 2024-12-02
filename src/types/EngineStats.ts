import type { EngineCycle } from './EngineCycle';
import type { Propellant } from './Propellant';
import type { ISP } from './units/ISP';
import type { Size } from './units/Size';
import type { Weight } from './units/Weight';

export default interface EngineStats {
	name: string;
	url: string;
	imageUrl: string;
	schemanticUrl: string;
	propellant: Propellant;
	cycle: EngineCycle;
	specificImpulseSeaLevel: ISP | null;
	specificImpulseVacuum: ISP | null;
	height: Size;
	diameter: Size;
	massDry: Weight;
}
