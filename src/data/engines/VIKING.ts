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
 * The Viking rocket engine.
 * @author cophilot
 * @date 2024-12-20
 */
const VIKING: EngineStats = {
	name: 'Viking',
	url: 'https://en.wikipedia.org/wiki/Viking_%28rocket_engine%29',
	imageUrl:
		'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUBPkvc3v4EOyCRL05xLkTQndvYCwmt2zrUw&s',
	schemanticUrl: '',
	latestVersion: '6',
	country: Country.EUROPE,
	status: Status.RETIRED,
	firstFlight: '1979',
	rockets: [Rocket.ARIANE_1, Rocket.ARIANE_2, Rocket.ARIANE_3, Rocket.ARIANE_4],
	propellant: Propellant.HYPERGOLIC,
	cycle: EngineCycle.GAS_GENERATOR,
	specificImpulseSeaLevel: new ISP(284),
	specificImpulseVacuum: new ISP(301),
	height: new Size(2.87),
	diameter: new Size(0.99),
	massDry: new Weight(826)
};

export default new Engine(VIKING);
