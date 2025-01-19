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
 * The aj10 rocket engine.
 * @author cophilot
 * @date 2025-1-19
 */
const AJ10: EngineStats = {
	name: 'AJ10',
	url: 'https://en.wikipedia.org/wiki/AJ10',
	imageUrl:
		'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Delta_II_second_stage.jpg/250px-Delta_II_second_stage.jpg',
	schemanticUrl: '',
	country: Country.USA,
	status: Status.IN_USE,
	firstFlight: '1958',
	rockets: [
		Rocket.TITAN_III,
		Rocket.DELTA_II,
		Rocket.APOLLO_CSM,
		Rocket.SPACE_SHUTTLE,
		Rocket.ORION
	],
	propellant: Propellant.HYPERGOLIC,
	cycle: EngineCycle.PRESSURE_FED,
	specificImpulseSeaLevel: null,
	specificImpulseVacuum: new ISP(319),
	height: new Size(0),
	diameter: new Size(0.84),
	massDry: new Weight(100)
};

export default new Engine(AJ10);
