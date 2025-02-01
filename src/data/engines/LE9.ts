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
 * The le9 rocket engine.
 * @author cophilot
 * @date 2025-2-1
 */
const LE9: EngineStats = {
	name: 'LE-9',
	url: 'https://en.wikipedia.org/wiki/LE-9',
	imageUrl:
		'https://cdnb.artstation.com/p/assets/images/images/073/130/789/large/shotaro-noda-le-9-v003.jpg?1708982901',
	schemanticUrl: '',
	country: Country.JAPAN,
	status: Status.IN_USE,
	firstFlight: '2023',
	rockets: [Rocket.H3],
	propellant: Propellant.HYDRO_LOX,
	cycle: EngineCycle.EXPANDER_BLEED,
	specificImpulseSeaLevel: null,
	specificImpulseVacuum: new ISP(426),
	height: new Size(3.8),
	diameter: null,
	massDry: new Weight(2400)
};

export default new Engine(LE9);
