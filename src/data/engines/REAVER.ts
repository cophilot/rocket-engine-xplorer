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
 * The Reaver rocket engine.
 * @author cophilot
 * @date 2025-3-1
 */
const REAVER: EngineStats = {
	name: 'Reaver',
	url: 'https://en.wikipedia.org/wiki/Firefly_Aerospace#Reaver',
	imageUrl: 'https://fireflyspace.com/wp-content/uploads/2022/01/2.jpeg',
	schemanticUrl: '',
	country: Country.USA,
	company: Company.FIRE_FLY,
	status: Status.IN_USE,
	firstFlight: '2021',
	rockets: [Rocket.ALPHA],
	propellant: Propellant.KERO_LOX,
	cycle: EngineCycle.TAP_OFF,
	specificImpulseSeaLevel: new ISP(295.6),
	specificImpulseVacuum: new ISP(0),
	height: new Size(0),
	diameter: new Size(0),
	massDry: new Weight(0)
};

export default new Engine(REAVER);
