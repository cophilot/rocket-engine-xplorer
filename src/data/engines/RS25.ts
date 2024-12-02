import Engine from '../../types/Engine';
import EngineCycle from '../../types/state/EngineCycle';
import type EngineStats from '../../types/EngineStats';
import { PropellantUtils } from '../../types/Propellant';
import Country from '../../types/state/Country';
import Status from '../../types/state/Status';
import { ISP } from '../../types/units/ISP';
import { Size } from '../../types/units/Size';
import { Weight } from '../../types/units/Weight';

const RS25: EngineStats = {
	name: 'RS-25',
	url: 'https://en.wikipedia.org/wiki/RS-25',
	imageUrl:
		'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Shuttle_Main_Engine_Test_Firing.jpg/250px-Shuttle_Main_Engine_Test_Firing.jpg',
	schemanticUrl: 'https://pbs.twimg.com/media/CL5DN9sWoAABWyM.jpg',
	country: Country.USA,
	status: Status.IN_USE,
	propellant: PropellantUtils.HYDRO_LOX,
	cycle: EngineCycle.STAGED_COMBUSTION,
	specificImpulseSeaLevel: new ISP(366),
	specificImpulseVacuum: new ISP(452.3),
	height: new Size(4.3),
	diameter: new Size(2.4),
	massDry: new Weight(3177)
};

export default new Engine(RS25);
