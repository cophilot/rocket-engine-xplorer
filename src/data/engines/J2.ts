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
 * The j-2 rocket engine.
 * @author cophilot
 * @date 2025-1-19
 */
const J2: EngineStats = {
	name: 'J-2',
	url: 'https://en.wikipedia.org/wiki/Rocketdyne_J-2',
	imageUrl:
		'https://lh3.googleusercontent.com/proxy/Lfj3lErPJKINWSYisxgnafg3LVHKLH4bz2MNS3rzDH_b8nFT7MaQt18OJasu2Nt6UcTYvQW-Hy-K5pX6Xui6euAvicj1iWZEhlZL7oIM4-STSvuzWPkcBRwDNxYLxqBj',
	schemanticUrl:
		'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/J-2_engine_schematic.png/400px-J-2_engine_schematic.png',
	country: Country.USA,
	status: Status.RETIRED,
	firstFlight: '1966',
	rockets: [Rocket.SATURN_IB, Rocket.SATURN_V],
	propellant: Propellant.HYDRO_LOX,
	cycle: EngineCycle.GAS_GENERATOR,
	specificImpulseSeaLevel: new ISP(200),
	specificImpulseVacuum: new ISP(421),
	height: new Size(3.4),
	diameter: new Size(2.1),
	massDry: new Weight(1788)
};

export default new Engine(J2);
