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
import { Cost } from '../../types/units/Cost';

/**
 * The rd180 rocket engine.
 * @author cophilot
 * @date 2024-12-5
 */
const RD180: EngineStats = {
	name: 'RD-180',
	url: 'https://en.wikipedia.org/wiki/RD-180',
	imageUrl:
		'https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/RD-180_test_firing.jpg/250px-RD-180_test_firing.jpg',
	schemanticUrl:
		'https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Rd180schematic.png/350px-Rd180schematic.png',
	country: Country.RUSSIA,
	status: Status.IN_USE,
	firstFlight: '2000',
	rockets: [Rocket.ATLAS_III, Rocket.ATLAS_V],
	propellant: Propellant.KERO_LOX,
	cycle: EngineCycle.OX_STAGED_COMBUSTION,
	specificImpulseSeaLevel: new ISP(311),
	specificImpulseVacuum: new ISP(338),
	height: new Size(3.56),
	diameter: new Size(3.15),
	massDry: new Weight(5480),
	cost: new Cost(25),
	reusable: false
};

export default new Engine(RD180);
