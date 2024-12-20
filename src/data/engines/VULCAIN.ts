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
 * The Vulcain rocket engine.
 * @author cophilot
 * @date 2024-12-20
 */
const VULCAIN: EngineStats = {
	name: 'Vulcain',
	latestVersion: '2.1',
	url: 'https://www.esa.int/ESA_Multimedia/Images/2017/10/Vulcain_2.1',
	imageUrl:
		'https://www.esa.int/var/esa/storage/images/esa_multimedia/images/2017/10/vulcain_2.1/17217857-1-eng-GB/Vulcain_2.1_pillars.jpg',
	schemanticUrl: '',
	country: Country.EUROPE,
	status: Status.IN_USE,
	firstFlight: '1996',
	rockets: [Rocket.ARIANE_5, Rocket.ARIANE_6],
	propellant: Propellant.HYDRO_LOX,
	cycle: EngineCycle.GAS_GENERATOR,
	specificImpulseSeaLevel: new ISP(0),
	specificImpulseVacuum: new ISP(432),
	height: new Size(3.7),
	diameter: new Size(2.5),
	massDry: new Weight(2000)
};

export default new Engine(VULCAIN);
