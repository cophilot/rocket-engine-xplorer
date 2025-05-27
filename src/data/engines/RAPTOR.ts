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
 * The raptor rocket engine.
 * @author cophilot
 * @date 2024-12-18
 */
const RAPTOR: EngineStats = {
	name: 'Raptor',
	url: 'https://en.wikipedia.org/wiki/SpaceX_Raptor',
	imageUrl:
		'https://images.squarespace-cdn.com/content/v1/669590619de9754fb689ec27/287df108-4e10-4746-b009-b00c1a0a1f26/raptor+1.jpg',
	schemanticUrl:
		'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Full_flow_staged_rocket_cycle.png/220px-Full_flow_staged_rocket_cycle.png',
	country: Country.USA,
	company: Company.SPACE_X,
	status: Status.IN_USE,
	firstFlight: '2023',
	rockets: [Rocket.STARSHIP],
	propellant: Propellant.META_LOX,
	cycle: EngineCycle.FULL_FLOW_STAGE_COMBUSTION,
	specificImpulseSeaLevel: new ISP(327),
	specificImpulseVacuum: new ISP(380),
	height: new Size(3.1),
	diameter: new Size(1.3),
	massDry: new Weight(1525),
	cost: new Cost(2),
	reusable: true
};

export default new Engine(RAPTOR);
