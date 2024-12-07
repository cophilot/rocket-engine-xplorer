import type EngineCycle from './state/EngineCycle';
import type { Propellant } from './state/Propellant';
import type Country from './state/Country';
import type Status from './state/Status';
import type { ISP } from './units/ISP';
import type { Size } from './units/Size';
import type { Weight } from './units/Weight';
import type Rocket from './state/Rocket';

export default interface EngineStats {
	name: string;
	url: string;
	imageUrl: string;
	schemanticUrl: string;
	firstFlight: string;
	country: Country;
	status: Status;
	propellant: Propellant;
	cycle: EngineCycle;
	rockets?: Rocket[];
	specificImpulseSeaLevel: ISP | null;
	specificImpulseVacuum: ISP | null;
	height: Size;
	diameter: Size;
	massDry: Weight;
}
