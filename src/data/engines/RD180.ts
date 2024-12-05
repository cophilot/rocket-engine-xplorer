import Engine from '../../types/Engine';
import type EngineStats from '../../types/EngineStats';
import { PropellantUtils } from '../../types/Propellant';
import { Weight } from '../../types/units/Weight';
import { ISP } from '../../types/units/ISP';
import { Size } from '../../types/units/Size';
import Country from '../../types/state/Country';
import Status from '../../types/state/Status';
import EngineCycle from '../../types/state/EngineCycle';

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
	propellant: PropellantUtils.KERO_LOX,
	cycle: EngineCycle.FULL_FLOW_STAGE_COMBUSTION,
	specificImpulseSeaLevel: new ISP(311),
	specificImpulseVacuum: new ISP(338),
	height: new Size(3.56),
	diameter: new Size(3.15),
	massDry: new Weight(5480)
};

export default new Engine(RD180);
