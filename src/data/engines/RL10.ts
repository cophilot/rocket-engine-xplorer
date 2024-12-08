import Engine from '../../types/Engine';
import type EngineStats from '../../types/EngineStats';
import { Propellant } from '../../types/state/Propellant';
import { Weight } from '../../types/units/Weight';
import { ISP } from '../../types/units/ISP';
import { Size } from '../../types/units/Size';
import Country from '../../types/state/Country';
import Status from '../../types/state/Status';
import EngineCycle from '../../types/state/EngineCycle';
import Rocket from '../../types/state/Rocket';

/**
 * @author cophilot
 */
const RL10: EngineStats = {
	name: 'RL10',
	url: 'https://en.wikipedia.org/wiki/RL10',
	imageUrl:
		'https://upload.wikimedia.org/wikipedia/commons/8/8a/Common_Extensible_Cryogenic_Engine.jpg',
	schemanticUrl: 'https://farm9.staticflickr.com/8345/8201255231_4dac24eb93_z.jpg',
	country: Country.USA,
	status: Status.IN_USE,
	firstFlight: '1962',
	rockets: [
		Rocket.ATLAS_III,
		Rocket.ATLAS_V,
		Rocket.DELTA_III,
		Rocket.DELTA_IV,
		Rocket.SATURN_I,
		Rocket.SLS,
		Rocket.TITAN_III,
		Rocket.TITAN_IV,
		Rocket.VULCAN
	],
	propellant: Propellant.HYDRO_LOX,
	cycle: EngineCycle.EXPANDER,
	specificImpulseSeaLevel: null,
	specificImpulseVacuum: new ISP(465.5),
	height: new Size(4.15),
	diameter: new Size(2.15),
	massDry: new Weight(301)
};

export default new Engine(RL10);
