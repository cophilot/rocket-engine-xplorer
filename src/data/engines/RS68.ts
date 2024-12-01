import Engine from '../../types/Engine';
import { EngineCycleUtils } from '../../types/EngineCycle';
import type EngineStats from '../../types/EngineStats';
import { PropellantUtils } from '../../types/Propellant';
import { Weight } from '../../types/units/Weight';
import { ISP } from '../../types/units/ISP';
import { Size } from '../../types/units/Size';

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
	specificImpulseSeaLevel: new ISP(0),
	specificImpulseVacuum: new ISP(0),
	height: new Size(0),
	diameter: new Size(0),
	massDry: new Weight(3177)
};

export default new Engine(RS68);
