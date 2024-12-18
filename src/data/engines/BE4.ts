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

/**
 * The be-4 rocket engine.
 * @author cophilot
 * @date 2024-12-18
 */
const BE4: EngineStats = {
	name: 'BE-4',
	url: 'https://www.blueorigin.com/engines/be-4',
	imageUrl: 'https://d1o72l87sylvqg.cloudfront.net/blue-origin/blueorigin-be4.png',
	schemanticUrl: '',
	country: Country.USA,
	company: Company.BLUE_ORIGIN,
	status: Status.IN_USE,
	firstFlight: '2024',
	rockets: [Rocket.VULCAN, Rocket.NEW_GLENN],
	propellant: Propellant.META_LOX,
	cycle: EngineCycle.OX_STAGED_COMBUSTION,
	specificImpulseSeaLevel: new ISP(0),
	specificImpulseVacuum: new ISP(0),
	height: new Size(0),
	diameter: new Size(0),
	massDry: new Weight(0)
};

export default new Engine(BE4);
