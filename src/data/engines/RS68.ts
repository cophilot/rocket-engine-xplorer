import Engine from '../../types/Engine';
import { EngineCycleUtils } from '../../types/EngineCycle';
import type EngineStats from '../../types/EngineStats';
import { PropellantUtils } from '../../types/Propellant';
import { Weight } from '../../types/units/Weight';

/**
 * @author cophilot
 */
const RS68: EngineStats = {
	name: 'RS-68',
	url: '',
	imageUrl: '',
	schemanticUrl: '',
	propellant: PropellantUtils.HYDRO_LOX,
	cycle: EngineCycleUtils.STAGED_COMBUSTION,
	specificImpulseSeaLevel: 0,
	specificImpulseVacuum: 0,
	height: 0,
	diameter: 0,
	massDry: new Weight(3177)
};

export default new Engine(RS68);
