import type EngineCycle from './state/EngineCycle';
import type { Propellant } from './Propellant';
import type Country from './state/Country';
import type Status from './state/Status';
import type { ISP } from './units/ISP';
import type { Size } from './units/Size';
import type { Weight } from './units/Weight';

export default interface EngineStats {
	name: string;
	url: string;
	imageUrl: string;
	schemanticUrl: string;
	country: Country;
	status: Status;
	propellant: Propellant;
	cycle: EngineCycle;
	specificImpulseSeaLevel: ISP | null;
	specificImpulseVacuum: ISP | null;
	height: Size;
	diameter: Size;
	massDry: Weight;
}
