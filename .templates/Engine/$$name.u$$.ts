import { EngineCycleUtils } from '../../types/EngineCycle';
import type EngineStats from '../../types/EngineStats';
import { PropellantUtils } from '../../types/Propellant';
import { Weight } from '../../types/units/Weight';

/**
 * @author $$git-name$$
 */
const $$name.u$$: EngineStats = {
	name: '$$name.t$$',
	url: '',
	imageUrl: '',
	schemanticUrl: '',
	propellant: PropellantUtils.HYDRO_LOX,
	cycle: EngineCycleUtils.STAGED_COMBUSTION,
	specificImpulseSeaLevel: 0,
	specificImpulseVacuum: 0,
	height: 0,
	diameter: 0,
	massDry: new Weight(0)
};

export default $$name.u$$;
