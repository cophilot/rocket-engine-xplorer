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
 * @author cophilot
 */
const VINCI: EngineStats = {
	name: 'Vinci',
	url: 'https://en.wikipedia.org/wiki/Vinci_(rocket_engine)',
	imageUrl:
		'https://www.researchgate.net/publication/268472531/figure/fig1/AS:880140900900866@1586853351788/The-VINCI-R-engine-at-P41-test-bench.png',
	schemanticUrl:
		'https://www.researchgate.net/publication/259896080/figure/fig1/AS:463040966598656@1487408977145/NCI-O-engine-flow-scheme-left-and-mock-up-right-courtesy-of-SAFRAN.png',
	country: Country.EUROPE,
	status: Status.IN_USE,
	firstFlight: '2024',
	rockets: [Rocket.ARIANE_6],
	propellant: Propellant.HYDRO_LOX,
	cycle: EngineCycle.EXPANDER,
	specificImpulseSeaLevel: null,
	specificImpulseVacuum: new ISP(457.2),
	height: new Size(3.22),
	diameter: new Size(1.84),
	massDry: new Weight(550)
};

export default new Engine(VINCI);
