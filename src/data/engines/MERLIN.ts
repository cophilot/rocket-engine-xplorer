import Engine from '../../types/Engine';
import type EngineStats from '../../types/EngineStats';
import { Propellant } from '../../types/state/Propellant';
import { Weight } from '../../types/units/Weight';
import { ISP } from '../../types/units/ISP';
import { Size } from '../../types/units/Size';
import Country from '../../types/state/Country';
import Status from '../../types/state/Status';
import EngineCycle from '../../types/state/EngineCycle';
import Company from '../../types/state/Company';
import Rocket from '../../types/state/Rocket';
import { Cost } from '../../types/units/Cost';

/**
 * The merlin rocket engine.
 * @author cophilot
 * @date 2024-12-19
 */
const MERLIN: EngineStats = {
	name: 'Merlin',
	url: 'https://en.wikipedia.org/wiki/SpaceX_Merlin',
	imageUrl:
		'https://spaceflightnow.com/wp-content/uploads/2020/01/82497489_2933870716643623_2546718540543557632_o.jpg',
	schemanticUrl: '',
	country: Country.USA,
	status: Status.IN_USE,
	company: Company.SPACE_X,
	firstFlight: '2006',
	latestVersion: '1D',
	rockets: [Rocket.FALCON_1, Rocket.FALCON_9, Rocket.FALCON_HEAVY],
	propellant: Propellant.KERO_LOX,
	cycle: EngineCycle.GAS_GENERATOR,
	specificImpulseSeaLevel: new ISP(282),
	specificImpulseVacuum: new ISP(311),
	height: new Size(2.92),
	diameter: new Size(0.92),
	massDry: new Weight(470),
	cost: new Cost(0.25)
};

export default new Engine(MERLIN);
