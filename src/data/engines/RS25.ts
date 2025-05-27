import Engine from '../../types/Engine';
import EngineCycle from '../../types/state/EngineCycle';
import type EngineStats from '../../types/EngineStats';
import { Propellant } from '../../types/state/Propellant';
import Country from '../../types/state/Country';
import Status from '../../types/state/Status';
import { ISP } from '../../types/units/ISP';
import { Size } from '../../types/units/Size';
import { Weight } from '../../types/units/Weight';
import Rocket from '../../types/state/Rocket';
import { Cost } from '../../types/units/Cost';

const RS25: EngineStats = {
	name: 'RS-25',
	url: 'https://en.wikipedia.org/wiki/RS-25',
	imageUrl:
		'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Shuttle_Main_Engine_Test_Firing.jpg/250px-Shuttle_Main_Engine_Test_Firing.jpg',
	schemanticUrl: 'https://pbs.twimg.com/media/CL5DN9sWoAABWyM.jpg',
	country: Country.USA,
	status: Status.IN_USE,
	firstFlight: '1981',
	rockets: [Rocket.SPACE_SHUTTLE, Rocket.SLS],
	propellant: Propellant.HYDRO_LOX,
	cycle: EngineCycle.FUEL_STAGED_COMBUSTION,
	specificImpulseSeaLevel: new ISP(366),
	specificImpulseVacuum: new ISP(452.3),
	height: new Size(4.3),
	diameter: new Size(2.4),
	massDry: new Weight(3177),
	cost: new Cost(50),
	reusable: true
};

export default new Engine(RS25);
