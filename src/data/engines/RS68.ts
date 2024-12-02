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
 * @author cophilot
 */
const RS68: EngineStats = {
	name: 'RS-68',
	url: 'https://en.wikipedia.org/wiki/RS-68',
	imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/4d/RS-68_rocket_engine_test.jpg',
	schemanticUrl:
		'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_p79S1pj-BhX47Munv2R44orq9EbhcPPAUg&s',
	country: Country.USA,
	status: Status.RETIRED,
	propellant: PropellantUtils.HYDRO_LOX,
	cycle: EngineCycle.GAS_GENERATOR,
	specificImpulseSeaLevel: new ISP(410),
	specificImpulseVacuum: new ISP(411.9),
	height: new Size(5.2),
	diameter: new Size(2.43),
	massDry: new Weight(6600)
};

export default new Engine(RS68);
